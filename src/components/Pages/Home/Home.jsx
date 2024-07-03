import Banner from "./HomeComponents/Banner";
import FirstOffer from "./HomeComponents/FirstOffer";
import Mission from "./HomeComponents/Mission";
import Service from "./HomeComponents/Service";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Mission></Mission>
            <Service></Service>
            <FirstOffer></FirstOffer>
        </div>
    );
};

export default Home;