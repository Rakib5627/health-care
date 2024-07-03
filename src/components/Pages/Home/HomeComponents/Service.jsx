import advanceImg from "../../../../assets/Rectangle 27-2.png"
import doctorImg from "../../../../assets/Rectangle 27-1.png"
import healthImg from "../../../../assets/Rectangle 27.png"

const Service = () => {
    return (
        <div className="mt-20">
            <div className="grid grid-cols-2 gap-y-8">
                <div className=" pl-4">
                    <img src={advanceImg} alt="" />
                </div>
                <div className=" px-6 relative ">
                    <div><img src={advanceImg} alt="" className=" rounded-3xl" /></div>
                    <div className="absolute bottom-4 left-56 transform -translate-x-3/4 bg-[#020043]/60 p-6 rounded-2xl shadow-md z-10 text-white">
                        <h4 className="text-lg font-semibold mb-2">Advanced Technology</h4>
                        <p className="text-sm">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                    </div>
                </div>
                <div className=" px-6 relative ">
                    <div><img src={doctorImg} alt="" className=" rounded-3xl" /></div>
                    <div className="absolute bottom-4 left-56 transform -translate-x-3/4 bg-[#020043]/60 p-6 rounded-2xl shadow-md z-10 text-white">
                        <h4 className="text-lg font-semibold mb-2">Online Doctor Meet</h4>
                        <p className="text-sm">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                    </div>
                </div>
                <div className=" px-6 relative ">
                    <div><img src={healthImg} alt="" className=" rounded-3xl" /></div>
                    <div className="absolute bottom-4 left-56 transform -translate-x-3/4 bg-[#020043]/60 p-6 rounded-2xl shadow-md z-10 text-white">
                        <h4 className="text-lg font-semibold mb-2">Consultancy your health</h4>
                        <p className="text-sm">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;