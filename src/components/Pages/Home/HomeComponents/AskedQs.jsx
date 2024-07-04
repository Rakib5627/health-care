import { FaChevronDown } from "react-icons/fa6";

const AskedQs = () => {
    return (
        <div className="mt-32">
            <button className="border-2 border-black px-5 py-2 text-sm rounded-3xl">FAQ</button>
            <h2 className="text-2xl font-semibold sm:text-3xl mt-5">Frequently Asked Question</h2>
            <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">              
                <div className="space-y-4">
                    <details className="w-full border rounded-lg bg-white">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 flex justify-between items-center cursor-pointer">
                            <span className="font-medium"> What are your office hours?</span>
                            <FaChevronDown className="ml-2" />
                        </summary>
                        <p className="px-4 text-sm py-6 pt-0 ml-4 -mt-4 text-gray-600">
                        Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg bg-white">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 flex justify-between items-center cursor-pointer">
                        <span className="font-medium"> How can I schedule an appointment?</span>
                        <FaChevronDown className="ml-2" />
                        </summary>
                        <p className="px-4 text-sm py-6 pt-0 ml-4 -mt-4 text-gray-600">
                        To schedule an appointment, call the service provider or use their online booking system, often available through their website or mobile app. Select an available time slot and confirm your booking.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg bg-white">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 flex justify-between items-center cursor-pointer">
                        <span className="font-medium"> Do you accept insurance?</span>
                        <FaChevronDown className="ml-2" />
                        </summary>
                        <p className="px-4 text-sm py-6 pt-0 ml-4 -mt-4 text-gray-600">
                        Yes, we accept various insurance plans. Please contact us to verify if your specific insurance is accepted.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg bg-white">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 flex justify-between items-center cursor-pointer">
                        <span className="font-medium"> What should I bring to my appointment?</span>
                        <FaChevronDown className="ml-2" />
                        </summary>
                        <p className="px-4 text-sm py-6 pt-0 ml-4 -mt-4 text-gray-600">
                        For your appointment, please bring a valid ID, your insurance card, a list of current medications, and any relevant medical records.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg bg-white">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 flex justify-between items-center cursor-pointer">
                        <span className="font-medium"> Do you offer telemedicine appointments?</span>
                        <FaChevronDown className="ml-2" />
                        </summary>
                        <p className="px-4 text-sm py-6 pt-0 ml-4 -mt-4 text-gray-600">
                        Yes, we offer telemedicine appointments for remote consultations. Please contact us to schedule a telemedicine appointment and receive instructions on how to connect.
                        </p>
                    </details>
                </div>
            </div>
        </section>

        </div>
    );
};

export default AskedQs;