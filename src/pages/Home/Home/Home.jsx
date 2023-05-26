
import Banner from "../Banner/Banner";
import ContactInfo from "../ContactInfo/ContactInfo";
import ContactUs from "../ContactUs/ContactUs";
import ExpertDoctor from "../ExpertDoctor/ExpertDoctor";
import OurService from "../OurService/OurService";
import PatientSay from "../PatientSay/PatientSay";

const Home = () => {
    return (
        <div className="space-y-28 mb-28">
            <Banner/>
            <OurService/>
            <ContactInfo/>
            <ExpertDoctor/>
            <PatientSay/>
            <ContactUs/>
        </div>
    );
};

export default Home;