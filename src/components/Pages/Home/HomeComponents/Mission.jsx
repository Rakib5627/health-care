import { MdOutlineArrowOutward } from "react-icons/md";
import helpImg from "../../../../assets/Rectangle 24.png"

const Mission = () => {
    return (
        <div className="mt-28">
            <div className="relative flex justify-between">
                <div className="w-1/2 relative">
                    {/* Help for solution*/}
                    <div className="relative">
                        <button className="border-2 border-black px-3 py-2 text-sm rounded-3xl">Who We are</button>
                        <h3 className="text-3xl font-semibold my-5">We Help To Get <br /> Solutions</h3>
                        <p className="text-sm mr-20">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                        </p>
                    </div>
                    <button className=" mt-10 px-6 py-3 bg-[#FFC637] hover:bg-[#fcc331] font-semibold rounded-xl">
                       <p className="flex items-center gap-2"> <span>Learn More </span><MdOutlineArrowOutward /></p>
                    </button>
                </div>
                <div className="w-1/2">
                    {/* Image */}
                    <img src={helpImg} alt="Help" className="w-full" />
                </div>
                {/* mission box */}
                <div className="absolute w-[395px] h-[210px] top-52 left-[42%] bg-[#343268] text-white p-6 rounded-3xl shadow-md z-10">
                    <h4 className="text-xl font-medium mb-3 mt-2">Our mission is simple</h4>
                    <p className="text-[16px]">To provide high-quality healthcare services <br /> that are accessible, personalized, and <br />  patient-centered.</p>
                </div>
            </div>
        </div>
    );
};

export default Mission;