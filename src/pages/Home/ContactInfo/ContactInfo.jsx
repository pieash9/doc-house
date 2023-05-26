import { FaRegClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="md:grid grid-cols-1 md:grid-cols-3 gap-6 ">
      <div className="flex gap-5 items-center bg-[#07332F] text-white px-10 py-12 rounded-md">
        <FaRegClock className="text-5xl" />
        <div>
          <h4 className="text-2xl font-medium">Opening Hours</h4>
          <p>Open 9.00 am to 5.00pm Everyday</p>
        </div>
      </div>
      <div className="flex gap-5 items-center bg-[#F7A582] text-white px-10 py-12 rounded-md">
        <FaMapMarkerAlt className="text-5xl" />
        <div>
          <h4 className="text-2xl font-medium">Our Locations</h4>
          <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
        </div>
      </div>
      <div className="flex gap-5 items-center bg-[#07332F] text-white px-10 py-12 rounded-md">
        <FaPhoneAlt className="text-5xl" />
        <div>
          <h4 className="text-2xl font-medium">Contact Us</h4>
          <p>+88 01750 00 00 00 <br /> +88 01750 00 00 00</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
