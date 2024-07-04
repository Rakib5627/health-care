import { FaStar } from "react-icons/fa";
import user1 from "../../../../assets/724f72eb2c73d3e7560e01a5f0093700.jpg"
import user2 from "../../../../assets/f2cf44bfa3af771f6396363d4ae67aab.jpg"
import user3 from "../../../../assets/d08cbe61699dcdccad10d7e4dd0904b0.jpg"

const Testimonial = () => {
    return (
        <div className="mt-32 text-[#020043] ">
            <button className="border-2 border-black px-4 py-2 text-sm rounded-3xl">Testimonial</button>
            <h3 className=" text-3xl font-semibold my-5">What they say about us</h3>

            <div className="flex justify-between items-center gap-4 rounded-2xl">
                <div className="bg-white w-[371px] rounded-2xl p-4">
                    <h3 className="font-medium">Expertise and Compassion Combined</h3>
                    <p className="text-xs">I can not thank enough for their exceptional care. The doctors showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                    <div className="flex items-center gap-2 my-5">
                        <img src={user1} alt="" className=" w-[44px] h-[44px] rounded-full" />
                        <div>
                            <p className=" text-sm">Sarah D, <span className="text-xs text-gray-600">IT Professional</span></p>
                            <div className="flex items-center text-[#FFE03D]"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                        </div>
                    </div>
                </div>
                <div className="bg-white  w-[371px] rounded-2xl p-4">
                    <h3 className="font-medium">Life-Saving Care, Life-Changing Experience</h3>
                    <p className="text-xs">My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                    <div className="flex items-center gap-2 my-5">
                        <img src={user2} alt="" className=" w-[44px] h-[44px] rounded-full" />
                        <div>
                            <p className=" text-sm">Michael R, <span className="text-xs text-gray-600">Business Executive</span></p>
                            <div className="flex items-center text-[#FFE03D]"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                        </div>
                    </div>
                </div>
                <div className="bg-white  w-[371px] rounded-2xl p-4">
                    <h3 className="font-medium">A Partner in Health and  <br /> Wellness</h3>
                    <p className="text-xs">As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups and </p>
                    <div className="flex items-center gap-2 my-5">
                        <img src={user3} alt="" className=" w-[44px] h-[44px] rounded-full" />
                        <div>
                            <p className=" text-sm">David S, <span className="text-xs text-gray-600">Lawyer</span></p>
                            <div className="flex items-center text-[#FFE03D]"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-5 gap-2">
                <div className=" bg-[#020043]/10 p-1 rounded-full w-2 "></div>
                <div className=" bg-[#FFC637] p-1 rounded-full w-2 "></div>
                <div className=" bg-[#020043]/10 p-1 rounded-full w-2 "></div>
            </div>
        </div>
    );
};

export default Testimonial;