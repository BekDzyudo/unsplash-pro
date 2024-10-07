// rrd
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import { Home, About, Contact, LikedImages } from "./pages";
// layouts
import MainLayout from "./layout/MainLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
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
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
