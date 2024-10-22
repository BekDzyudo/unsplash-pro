// rrd
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// pages
import { Home, About, Contact, LikedImages, Login, Register } from "./pages";
// layouts
import MainLayout from "./layout/MainLayout";
// actions
import { action as homeAction } from "./pages/Home";
import DownloadImages from "./pages/DownloadImages";
import ImageInfo from "./pages/ImageInfo";
import { ProtectedRoutes } from "./components";

function App() {
  const user = true;
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
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
