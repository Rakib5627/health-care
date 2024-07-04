import offerImg from '../../../../assets/Rectangle 32.png';

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
                
                {/* Text and buttons */}
                <div className="relative z-10 flex flex-col justify-center h-full p-8">
                    <h1 className="text-4xl font-semibold mb-4 text-white">
                        Get Your <br />
                        First Appointment <br />
                        at 50% Off!
                    </h1>
                    <div className="flex space-x-4">
                        <button className="px-6 py-3 bg-[#FFC637] hover:bg-[#fcc331] font-semibold rounded-xl">
                            Appointment
                        </button>
                        <button className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-blue-500 text-white font-semibold rounded-xl">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstOffer;
