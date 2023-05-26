import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-[#07332F] py-20 px-16 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 text-white gap-6">
        <div className="space-y-5 ">
          <h3 className="text-4xl ">Contact With Us</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi.
          </p>

          <div className="flex gap-4 items-center ">
            <FaPhoneAlt className="text-xl" />
            <p>+88 016 27001665</p>
          </div>
          <div className="flex gap-4 items-center ">
            <FaMapMarkerAlt className="text-xl" />
            <p>Savar, Dhaka Bangladesh</p>
          </div>
        </div>

        <div className="space-y-6 ">
          <div className="mr-2 flex gap-6">
            <input
              className="input bg-[#133D39] text-white border focus:border-[#34afa3] w-full"
              type="text"
              placeholder="Name"
            />
            <input
              type="text "
              className="input bg-[#133D39] border focus:border-[#34afa3] w-full"
              placeholder="Email"
            />
          </div>
          <div className="mr-2 flex gap-6">
            <input
              className="input bg-[#133D39] border focus:border-[#34afa3] w-full"
              type="text"
              placeholder="Mobile Number"
            />
            <input
              type="text "
              className="input bg-[#133D39] border focus:border-[#34afa3] w-full"
              placeholder="Doctor Name"
            />
          </div>
          <div className="mr-2 flex gap-6">
            <input
              className="input bg-[#133D39] border focus:border-[#34afa3] w-full"
              type="date"
              placeholder="date"
            />
            <input
              type="time"
              className="input bg-[#133D39] border focus:border-[#34afa3] w-full"
              placeholder="Time"
            />
          </div>
          <button className="btn btn-error w-full ">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
