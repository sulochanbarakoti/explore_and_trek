import { MdDateRange } from "react-icons/md";
import { FaPlaneArrival } from "react-icons/fa";
import { BiTrip } from "react-icons/bi";

const Card = () => {
  return (
    // <div className="flex flex-col md:flex-row justify-between mx-10 md:mx-36 space-y-5 md:space-y-0 space-x-0 md:space-x-32">
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mx-10 space-y-5 md:space-y-0 ">
      <div className="space-y-2 border-gray-300 border-2 rounded-md hover:shadow-2xl p-5">
        <div>
          <FaPlaneArrival size={34} color="green" />
        </div>
        <div className="text-lg font-bold">Pick Destination</div>
        <div>
          We are specialized in Trekking, Touring, Climbing adventure activities
          of Nepal. We also organaize Tibet and Bhutan tours. Where do you want
          to travel?
        </div>
      </div>
      <div className="space-y-2 border-gray-300 border-2 rounded-md hover:shadow-2xl p-5">
        <div>
          <MdDateRange size={34} color="green" />
        </div>
        <div className="text-lg font-bold">Select Date</div>
        <div>
          Let us know your travel date with your tour details, we will help you
          to pick a best time and months so that you will have your trip
          lifetime memorable.
        </div>
      </div>
      <div className="space-y-2 border-gray-300 border-2 rounded-md hover:shadow-2xl p-5">
        <div>
          <BiTrip size={34} color="green" />
        </div>
        <div className="text-lg font-bold">Book Your Trip</div>
        <div>
          Booking procedure with Great Adventure Treks is easy. You can make
          direct payment trough the trip url. We 30% - 40% take booking fee of
          package price.
        </div>
      </div>
    </div>
  );
};

export default Card;
