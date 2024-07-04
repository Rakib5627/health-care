import advanceImg from "../../../../assets/Rectangle 27-2.png"
import doctorImg from "../../../../assets/Rectangle 27-1.png"
import healthImg from "../../../../assets/Rectangle 27.png"
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaCircleArrowUp } from "react-icons/fa6";
const Service = () => {
    return (
        <div className="mt-32">
            <div className="grid grid-cols-2 gap-y-8 gap-x-4 p-8 bg-white">
                <div className="">
                    <button className="border-2 border-black px-4 py-2 text-sm rounded-3xl">Service</button>
                    <h3 className=" font-semibold text-3xl my-5">Empowering Health, <br /> Enriching Lives</h3>
                    <p className=" text-sm mb-5">We are committed to providing high-quality,<br /> compassionate care to every patient we serve. <br /> Whatever your healthcare needs may be, you can trust <br /> us to be your partner in health and wellness.</p>
                    <button className="px-6 py-3 bg-[#FFC637] hover:bg-[#fcc331] font-semibold rounded-xl">
                        <p className="flex items-center gap-2"> <span>Appointment </span><MdOutlineArrowOutward /></p>
                    </button>
                </div>
                <div className="  relative ">
                    <div><img src={advanceImg} alt="" className=" rounded-3xl" /></div>
                    <div className="absolute bottom-4 left-[200px] transform -translate-x-36 bg-[#020043]/60 p-4 rounded-2xl shadow-md z-10 text-white">
                        <h4 className=" font-semibold mb-2">Advanced Technology</h4>
                        <div className=" flex items-end justify-between">
                            <p className="text-xs">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                            <div className="transform rotate-45 text-3xl text-[#FFC637]">
                                <FaCircleArrowUp />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="  relative ">
                    <div><img src={doctorImg} alt="" className=" rounded-3xl" /></div>
                    <div className="absolute bottom-4 left-[200px] transform -translate-x-36 bg-[#020043]/60 p-4 rounded-2xl shadow-md z-10 text-white">
                        <h4 className=" font-semibold mb-2">Online Doctor Meet</h4>
                        <div className=" flex items-end justify-between">
                            <p className="text-xs">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                            <div className="transform rotate-45 text-3xl text-[#FFC637]">
                                <FaCircleArrowUp />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="  relative ">
                    <div><img src={healthImg} alt="" className=" rounded-3xl" /></div>
                    <div className="absolute bottom-4 left-[200px] transform -translate-x-36 bg-[#020043]/60 p-4 rounded-2xl shadow-md z-10 text-white">
                        <h4 className=" font-semibold mb-2">Consultancy your health</h4>
                        <div className=" flex items-end justify-between">
                            <p className="text-xs">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                            <div className="transform rotate-45 text-3xl text-[#FFC637]">
                                <FaCircleArrowUp />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;