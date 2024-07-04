import { MdOutlineArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li className="flex">
            <NavLink to="/" className="flex items-center px-4 -mb-1 dark:border- dark:text-violet-600 dark:border-violet-600">Home</NavLink>
        </li>
        <li className="flex">
            <NavLink to="/service" className="flex items-center px-4 -mb-1 dark:border-">Service</NavLink>
        </li>
        <li className="flex">
            <NavLink to="/blog" className="flex items-center px-4 -mb-1 dark:border-">Blog</NavLink>
        </li>
        <li className="flex">
            <NavLink to="/aboutUs" className="flex items-center px-4 -mb-1 dark:border-">About Us</NavLink>
        </li>
    </>

    return (
        <div className="mb-4">
            <header className="py-4 dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex justify-between h-16 mx-auto">
                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                        <h3 className="flex items-center text-[#020043] font-bold">
                            <svg width="125" height="33" viewBox="0 0 125 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.6393 16.5171C30.6393 18.0535 30.4344 19.5167 30.0247 20.9067C29.615 22.2821 29.0371 23.5551 28.2909 24.7256C27.5593 25.8962 26.6813 26.957 25.6571 27.9081C24.6329 28.8445 23.4989 29.642 22.2552 30.3004C21.0261 30.9589 19.7019 31.471 18.2826 31.8368C16.8779 32.1879 15.4294 32.3635 13.9369 32.3635H0V0.758528H13.9369C15.4294 0.758528 16.8779 0.934111 18.2826 1.28528C19.6873 1.63644 21.0042 2.14125 22.2332 2.79968C23.4769 3.44349 24.6109 4.23361 25.6352 5.17006C26.674 6.1065 27.5593 7.16 28.2909 8.33056C29.0371 9.48648 29.615 10.7595 30.0247 12.1495C30.4344 13.5249 30.6393 14.9808 30.6393 16.5171ZM21.7943 16.5171C21.7943 14.8052 21.5821 13.181 21.1578 11.6447C20.7481 10.0937 20.1043 8.73293 19.2264 7.56238C18.3485 6.39182 17.2291 5.4627 15.8683 4.775C14.5222 4.08729 12.9054 3.74344 11.0179 3.74344H8.71332V29.2908H11.0179C12.8761 29.2908 14.4783 28.947 15.8244 28.2593C17.1852 27.5569 18.3046 26.6205 19.1825 25.4499C20.075 24.2647 20.7335 22.904 21.1578 21.3676C21.5821 19.8313 21.7943 18.2144 21.7943 16.5171Z" fill="#020043" />
                                <path d="M103.111 8.59393L99.3582 10.1742C99.0655 9.2231 98.6705 8.3525 98.173 7.56238C97.6901 6.77225 97.1049 6.09919 96.4172 5.54317C95.7441 4.97253 94.9759 4.53357 94.1126 4.2263C93.2494 3.90439 92.3056 3.74344 91.2814 3.74344C90.184 3.74344 89.1744 3.92634 88.2525 4.29214C87.3454 4.64331 86.526 5.13348 85.7944 5.76265C85.0774 6.39182 84.4482 7.12342 83.9069 7.95744C83.3655 8.79146 82.9119 9.68401 82.5461 10.6351C82.1803 11.5715 81.9096 12.5446 81.734 13.5542C81.5584 14.5638 81.4706 15.5514 81.4706 16.5171C81.4706 18.0535 81.6462 19.5825 81.9974 21.1042C82.3632 22.626 82.9338 23.994 83.7093 25.2085C84.4995 26.423 85.5164 27.4106 86.7601 28.1715C88.0038 28.9177 89.5109 29.2908 91.2814 29.2908C92.2178 29.2908 93.103 29.1372 93.9371 28.8299C94.7711 28.508 95.5246 28.0764 96.1977 27.535C96.8854 26.979 97.4853 26.3278 97.9974 25.5816C98.5095 24.8354 98.9192 24.0306 99.2265 23.1673L103.023 24.6818C102.467 26.0718 101.707 27.2936 100.741 28.3471C99.7752 29.3859 98.6705 30.2492 97.4268 30.9369C96.1977 31.6246 94.8735 32.1367 93.4542 32.4733C92.0495 32.8244 90.6302 33 89.1963 33C87.6453 33 86.1529 32.8098 84.7189 32.4294C83.2996 32.0489 81.9754 31.5075 80.7464 30.8052C79.5173 30.1029 78.3979 29.2542 77.3883 28.2593C76.3934 27.2643 75.5374 26.1596 74.8204 24.9451C74.1181 23.7307 73.5694 22.4138 73.1743 20.9945C72.7939 19.5606 72.6037 18.0681 72.6037 16.5171C72.6037 14.9661 72.7939 13.481 73.1743 12.0617C73.5694 10.6278 74.1181 9.30358 74.8204 8.08913C75.5374 6.86005 76.3934 5.74802 77.3883 4.75305C78.3979 3.75808 79.5173 2.90942 80.7464 2.20709C81.9754 1.50476 83.2996 0.963375 84.7189 0.582944C86.1529 0.202514 87.6453 0.0122986 89.1963 0.0122986C90.6888 0.0122986 92.1446 0.187882 93.5639 0.539048C94.9979 0.890215 96.3294 1.42428 97.5585 2.14125C98.7875 2.84358 99.8776 3.73613 100.829 4.81889C101.794 5.88702 102.555 7.14537 103.111 8.59393Z" fill="#020043" />
                                <path d="M124.818 18.5583H118.914V25.3182H112.395V18.5583H106.491V14.5199H112.395V8.08913H118.914V14.5199H124.818V18.5583Z" fill="#020043" />
                                <circle cx="51.7101" cy="16.1818" r="16.1818" fill="#FFC637" />
                                <path d="M56.5124 11.5455H54.5124V10.9091C54.5124 10.4028 54.3017 9.91718 53.9266 9.55916C53.5515 9.20114 53.0428 9 52.5124 9H51.179C50.6486 9 50.1399 9.20114 49.7648 9.55916C49.3898 9.91718 49.179 10.4028 49.179 10.9091V11.5455H47.179C46.2953 11.5465 45.4481 11.882 44.8232 12.4785C44.1983 13.075 43.8468 13.8837 43.8457 14.7273V19.8182C43.8468 20.6617 44.1983 21.4705 44.8232 22.067C45.4481 22.6634 46.2953 22.999 47.179 23H56.5124C57.3961 22.999 58.2433 22.6634 58.8682 22.067C59.4931 21.4705 59.8446 20.6617 59.8457 19.8182V14.7273C59.8446 13.8837 59.4931 13.075 58.8682 12.4785C58.2433 11.882 57.3961 11.5465 56.5124 11.5455ZM50.5124 10.9091C50.5124 10.7403 50.5826 10.5785 50.7076 10.4591C50.8327 10.3398 51.0022 10.2727 51.179 10.2727H52.5124C52.6892 10.2727 52.8588 10.3398 52.9838 10.4591C53.1088 10.5785 53.179 10.7403 53.179 10.9091V11.5455H50.5124V10.9091ZM53.8457 17.9091H52.5124V19.1818C52.5124 19.3506 52.4421 19.5125 52.3171 19.6318C52.1921 19.7511 52.0225 19.8182 51.8457 19.8182C51.6689 19.8182 51.4993 19.7511 51.3743 19.6318C51.2493 19.5125 51.179 19.3506 51.179 19.1818V17.9091H49.8457C49.6689 17.9091 49.4993 17.842 49.3743 17.7227C49.2493 17.6034 49.179 17.4415 49.179 17.2727C49.179 17.104 49.2493 16.9421 49.3743 16.8228C49.4993 16.7034 49.6689 16.6364 49.8457 16.6364H51.179V15.3636C51.179 15.1949 51.2493 15.033 51.3743 14.9137C51.4993 14.7943 51.6689 14.7273 51.8457 14.7273C52.0225 14.7273 52.1921 14.7943 52.3171 14.9137C52.4421 15.033 52.5124 15.1949 52.5124 15.3636V16.6364H53.8457C54.0225 16.6364 54.1921 16.7034 54.3171 16.8228C54.4421 16.9421 54.5124 17.104 54.5124 17.2727C54.5124 17.4415 54.4421 17.6034 54.3171 17.7227C54.1921 17.842 54.0225 17.9091 53.8457 17.9091Z" fill="#020043" />
                            </svg>

                        </h3>
                    </a>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        {navLinks}
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">

                        <button className="self-center border-2 border-[#343268] px-8 py-3 rounded-xl"><p className="flex items-center gap-1"><span>Appointment</span><MdOutlineArrowOutward /></p></button>

                    </div>
                    <button className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Navbar;