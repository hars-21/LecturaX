import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import "../../styles/home.css";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <main className="home-pages">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
