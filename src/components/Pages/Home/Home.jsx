import AskedQs from "./HomeComponents/AskedQs";
import Banner from "./HomeComponents/Banner";
import FirstOffer from "./HomeComponents/FirstOffer";
import Mission from "./HomeComponents/Mission";
import Service from "./HomeComponents/Service";
import StatisticalBanner from "./HomeComponents/StatisticalBanner";
import Testimonial from "./HomeComponents/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StatisticalBanner></StatisticalBanner>
            <Mission></Mission>
            <Service></Service>
            <Testimonial></Testimonial>
            <AskedQs></AskedQs>
            <FirstOffer></FirstOffer>
        </div>
    );
};

export default Home;