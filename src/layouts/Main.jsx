import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="bg-gradient-to-b from-[#E5F6FF] via-white to-[#E5F6FF]">
            <div className=" max-w-[1160px] mx-auto ">
            <Navbar></Navbar>
           <Outlet></Outlet> 
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Main;