import banner from "../../../../assets/Rectangle 5.png"
const Banner = () => {
    return (
     <div className="">
           <div className="relative w-full h-[470px] bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className="absolute inset-0 rounded-[42px] bg-gradient-to-r from-[#00C19D] to-[#020043] opacity-20 "></div>
        </div>
     </div>
    );
};

export default Banner;
