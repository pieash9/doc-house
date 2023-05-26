import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer pt-10 pb-5 bg-gray-700 text-white px-10">
        <div className="md:max-w-xs">
          <img className="mb-5" src={logo} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. has been since the printer took.
          </p>
          <button className="btn btn-error btn-outline mt-3">
            Appointment
          </button>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-gray-700 text-white">
        <div>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
