import advanceImg from "../../../../assets/Rectangle 27-2.png"
import doctorImg from "../../../../assets/Rectangle 27-1.png"
import healthImg from "../../../../assets/Rectangle 27.png"

const Service = () => {
    return (
        <div className="mt-20">
            <div className="grid grid-cols-2 gap-y-8">
                <div className=" pl-4">
                    <button className="border-2 border-black px-3 py-2 text-sm rounded-3xl">Service</button>
                    <h3 className=" font-semibold text-3xl my-5">Empowering Health, <br /> Enriching Lives</h3>
                    <p className=" text-sm mb-5">We are committed to providing high-quality,<br /> compassionate care to every patient we serve. <br /> Whatever your healthcare needs may be, you can trust <br /> us to be your partner in health and wellness.</p>
                    <button className="px-6 py-3 bg-[#FFC637] hover:bg-[#fcc331] font-semibold rounded-xl">
                        Appointment
                    </button>
                </div>
                <div className=" px-6 relative ">
                    <div><img src={advanceImg} alt="" className=" rounded-3xl" /></div>
                    <div className="absolute bottom-4 left-56 transform -translate-x-3/4 bg-[#020043]/60 p-6 rounded-2xl shadow-md z-10 text-white">
                        <h4 className=" font-semibold mb-2">Advanced Technology</h4>
                        <p className="text-xs">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                    </div>
                </div>
                <div className=" px-6 relative ">
                    <div><img src={doctorImg} alt="" className=" rounded-3xl" /></div>
                    <div className="absolute bottom-4 left-56 transform -translate-x-3/4 bg-[#020043]/60 p-6 rounded-2xl shadow-md z-10 text-white">
                        <h4 className=" font-semibold mb-2">Online Doctor Meet</h4>
                        <p className="text-xs">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                    </div>
                </div>
                <div className=" px-6 relative ">
                    <div><img src={healthImg} alt="" className=" rounded-3xl" /></div>
                    <div className="absolute bottom-4 left-56 transform -translate-x-3/4 bg-[#020043]/60 p-6 rounded-2xl shadow-md z-10 text-white">
                        <h4 className=" font-semibold mb-2">Consultancy your health</h4>
                        <p className="text-xs">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;