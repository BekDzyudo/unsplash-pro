// rrd
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
// pages
import { Home, About, Contact, LikedImages, Login, Register } from "./pages";
// layouts
import MainLayout from "./layout/MainLayout";
// actions
import { action as homeAction } from "./pages/Home";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
// components
import DownloadImages from "./pages/DownloadImages";
import ImageInfo from "./pages/ImageInfo";
import { ProtectedRoutes } from "./components";
// context
import { useGlobalContext } from "./hooks/useGlobalContext";
// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
// toastify
import { toast } from "react-toastify";

function App() {
  const { user, dispatch, authReady } = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
          action: homeAction,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/likedimages",
          element: <LikedImages />,
        },
        {
          path: "/downloadimages",
          element: <DownloadImages />,
        },
        {
          path: "/ImageInfo/:id",
          element: <ImageInfo />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      action: loginAction,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
      action: registerAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "AUTH_READY" });
    });
  }, []);

  return authReady && <RouterProvider router={routes} />;
}

export default App;
