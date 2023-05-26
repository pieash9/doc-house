import SectionTitle from "../../../components/SectionTitle";
import patient1 from "../../../assets/home/patient1.png";
import patient2 from "../../../assets/home/patient2.png";
import { FaQuoteLeft } from "react-icons/fa";

const PatientSay = () => {
  return (
    <div>
      <SectionTitle
        title={"What Our Patients Says"}
        subTitle={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
      />

      <div className="md:flex gap-6 mt-10">
        <div className="border border-gray-200 px-5 py-10 rounded">
          <div className="flex justify-between">
            <div className="flex gap-5">
              <img className="h-14 w-14" src={patient1} alt="" />
              <div>
                <h4 className="text-xl font-medium">Awlad Hossain</h4>
                <p className="text-gray-600">Product Designer</p>
              </div>
            </div>
            <FaQuoteLeft className="text-7xl text-[#F7A582]" />
          </div>
          <p className="text-gray-600">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknow printer tool a galley of type and
            scrambled it to make type specimen book has survived not only five
            centurines.
          </p>
        </div>
        <div className="border border-gray-200 px-5 py-10 rounded">
          <div className="flex justify-between">
            <div className="flex gap-5">
              <img className="h-14 w-14" src={patient2} alt="" />
              <div>
                <h4 className="text-xl font-medium">Farhana Hossain</h4>
                <p className="text-gray-600">Brand Designer</p>
              </div>
            </div>
            <FaQuoteLeft className="text-7xl text-[#F7A582]" />
          </div>
          <p className="text-gray-600">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknow printer tool a galley of type and
            scrambled it to make type specimen book has survived not only five
            centurines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientSay;
