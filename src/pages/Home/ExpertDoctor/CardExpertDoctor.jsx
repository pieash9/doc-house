/* eslint-disable react/prop-types */
import {
  FaDollarSign,
  FaMapMarkerAlt,
  FaRegCalendar,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";

const CardExpertDoctor = ({ doctor }) => {
  const { name, designation, rating, location, availableDate, price, image } =
    doctor;
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl p-5">
        <figure>
          <img className="w-full" src={image} alt="teeth" />
        </figure>
        <div className="my-4 space-y-1">
          <h2 className="text-2xl font-medium">{name}</h2>
          <p>{designation}</p>
          <Rating
            placeholderRating={rating}
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar />}
            fullSymbol={<FaStar />}
            className="text-[#F2871D] text-lg"
            readonly
          />

          <div className="!my-3 space-y-2">
            <div className="flex gap-2 items-center text-gray-600">
              <FaMapMarkerAlt className="text-lg" />
              <p>{location}</p>
            </div>
            <div className="flex gap-2 items-center text-gray-600">
              <FaRegCalendar className="text-lg" />
              <p>{availableDate}</p>
            </div>
            <div className="flex gap-2 items-center text-gray-600">
              <FaDollarSign className="text-lg" />
              <p>${price}</p>
            </div>
          </div>

          <div className="mt-5">
            <button className="btn btn-error btn-outline w-full">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardExpertDoctor;
