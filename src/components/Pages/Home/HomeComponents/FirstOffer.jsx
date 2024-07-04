import { MdOutlineArrowOutward } from 'react-icons/md';
import offerImg from '../../../../assets/Rectangle 32.png';
import Logo from '../../../Shared/Logo/Logo';

const FirstOffer = () => {
    return (
        <div className="my-32">
            <div className="relative w-full h-[477px] rounded-3xl overflow-hidden">
                {/* Background image */}
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${offerImg})`,
                    }}
                ></div>
                {/* Gradient overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#020043] to-[#020043]/30"></div>
                
                {/* Logo */}
                <div className="absolute top-12 right-12 z-20">
                    <Logo />
                </div>
                
                {/* Text and button */}
                <div className="relative z-10 flex flex-col justify-center h-full p-8 ml-5">
                    <h1 className="text-4xl flex flex-col gap-2 font-semibold mb-8 text-white">
                        <span>Get Your</span>
                        <span>First Appointment</span>
                         <span>at 50% Off!</span>  
                    </h1>
                    <div className="flex space-x-4">
                        <button className="px-6 py-3 bg-[#FFC637] hover:bg-[#fcc331] font-semibold rounded-xl">
                            <p className="flex items-center gap-2">
                                <span>Appointment</span>
                                <MdOutlineArrowOutward />
                            </p>
                        </button>
                        <button className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-blue-500 text-white font-semibold rounded-xl">
                            <p className="flex items-center gap-2">
                                <span>Learn More</span>
                                <MdOutlineArrowOutward />
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstOffer;
