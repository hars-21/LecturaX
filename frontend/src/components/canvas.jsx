import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const Canvas = () => {
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

export default Canvas;
