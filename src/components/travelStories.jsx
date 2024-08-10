import { ImLocation2 } from "react-icons/im";
import { MdAccessTimeFilled } from "react-icons/md";
import { Trip } from "../../data";

const TravelStories = () => {
  return (
    <div className="space-y-2">
      <div className="mx-10 md:mx-36 flex flex-row justify-between">
        <div className="text-3xl font-bold">Best Trekking Deals</div>
        <button className="border-2 px-2 md:px-6 rounded-md border-primary hover:bg-primary hover:text-white hidden md:block">
          More...
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between mx-10 md:mx-36 space-y-5 md:space-y-0">
        {Trip.map((item, index) => (
          <div
            key={index}
            className="border rounded-md shadow-lg hover:shadow-xl"
          >
            <div className="w-full h-60 overflow-hidden">
              <img
                src={item.image}
                alt=""
                className="rounded-t-md w-full h-full object-cover"
              />
            </div>
            <div className="p-2">
              <div className="mt-5 flex flex-row items-center font-semibold space-x-2">
                <ImLocation2 color="green" />
                <div>{item.tripDetails.arrivalCity}</div>
              </div>
              <div className="font-bold">{item.tripName}</div>
              <div className="font-semibold text-gray-400 flex flex-row items-center space-x-2 mt-2">
                <MdAccessTimeFilled />
                <div>{item.days} Days</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="mx-10 md:mx-36 md:hidden">
          <button className="border-2 p-2 rounded-md border-primary hover:bg-primary hover:text-white">
            View all Destination
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelStories;
