import img1 from "../../../assets/home/doctor1.png";
import img2 from "../../../assets/home/doctor2.png";
import img3 from "../../../assets/home/doctor3.png";

const Banner = () => {
  return (
    <section className="bg-[#07332F] h-[600px]">
      <div className="flex w-full h-full items-center">
        <div className="md:w-1/2 text-white flex flex-col md:ml-20 space-y-5">
          <h3 className="text-7xl ">Your Best Medical Help Center</h3>
          <p>
            Lorem Ipsum is simply dummy text they are printing typesetting has
            been the industry s standard.
          </p>
          <button className="btn w-fit btn-error btn-lg text-white font-semibold">
            All Service
          </button>
        </div>
        <div className="relative flex items-center ">
          <img
            className="w-56 absolute md:top-28 md:left-24"
            src={img3}
            alt=""
          />
          <img className="w-56 " src={img1} alt="" />
          <img className="w-56 z-10 md:-top-10 md:avatar" src={img2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
