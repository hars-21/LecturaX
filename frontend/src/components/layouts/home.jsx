import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
