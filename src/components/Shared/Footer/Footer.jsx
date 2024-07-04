import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";
import Logo from "../Logo/Logo";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="px-4 divide-y bg-[#020043] text-white">
                <div className="max-w-[1160px] mx-auto py-16">
                    <div>
                        <a rel="noopener noreferrer" href="#" >
                            <Logo></Logo>
                        </a>
                    </div>
                    <div className="container flex flex-col justify-between pt-4 space-y-8 lg:flex-row lg:space-y-0">
                        <div className="lg:w-1/3">
                            <div className=" text-sm">
                                <p>123 Main Street Anytown, USA <br />Postal Code: 12345</p>
                                <p className=" mt-6">Support: support@oyolloo.com</p>
                                <p>(Available : 10:00am to 07:00pm)</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
                            <div className="">
                                <ul className="space-y-3">
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Home</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Success Page</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Terms and Conditions</a>
                                    </li>

                                </ul>
                            </div>
                            <div className="">
                                <ul className="space-y-3">
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Service</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Scheduling</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Patient Portal</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="">
                                <div className=" text-sm dark:text-gray-900 mb-4">Follow Us</div>
                                <div className="flex gap-4 space-x-3 text-lg mb-6">
                                    <a href=""><FaFacebook /></a>
                                    <a href=""><FaInstagram /></a>
                                    <a href=""><FaLinkedin /></a>
                                    <a href=""><FaYoutube /></a>

                                </div>
                                <p>@docplus 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
