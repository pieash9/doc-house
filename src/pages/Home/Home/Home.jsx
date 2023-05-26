
import Banner from "../Banner/Banner";
import ContactInfo from "../ContactInfo/ContactInfo";
import ExpertDoctor from "../ExpertDoctor/ExpertDoctor";
import OurService from "../OurService/OurService";

const Home = () => {
    return (
        <div className="space-y-28 mb-28">
            <Banner/>
            <OurService/>
            <ContactInfo/>
            <ExpertDoctor/>
        </div>
    );
};

export default Home;