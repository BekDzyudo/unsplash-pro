// rrd
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import { Home, About, Contact, LikedImages } from "./pages";
// layouts
import MainLayout from "./layout/MainLayout";
// actions
import { action as homeAction } from "./pages/Home";
import DownloadImages from "./pages/DownloadImages";
import ImageInfo from "./pages/ImageInfo";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
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
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
