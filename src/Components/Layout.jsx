import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
export default function Layout() {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <Footer />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
