// rrd
import { Outlet } from "react-router-dom";
// components
import { Footer, Navbar } from "../components";
function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
