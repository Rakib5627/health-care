import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="bg-gradient-to-r from-[#E5F6FF] via-[#F1FAFF] to-[#C9DDE7]">
            <div className="bg-gradient-to-b from-[#E5F6FF] via-white to-[#C9DDE7]">
                <div className=" max-w-[1160px] mx-auto ">
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Main;