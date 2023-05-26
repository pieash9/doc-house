import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import CardExpertDoctor from "./CardExpertDoctor";

const ExpertDoctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(`expertDoctor.json`)
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <section>
      <div className="mb-6">
        <SectionTitle
          title={"Our Expert Doctors"}
          subTitle={
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {doctors?.map((doctor) => (
          <CardExpertDoctor key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
};

export default ExpertDoctor;
