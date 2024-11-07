import { ImLocation2 } from "react-icons/im";
import { MdAccessTimeFilled } from "react-icons/md";
import { Trip } from "../../data";
// import { Link } from "react-router-dom";

const TravelStories = () => {
  const handleClick = (id) => {
    console.log(id, "Button clicked");
  };
  return (
    <div className="space-y-2 mx-10">
      <div className="mx-auto  lg:mx-0 flex flex-row justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Best Trekking Deals
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to explore Nepal with our expert advice.
          </p>
        </div>
        <div>
          <button className="border-2 px-2 md:px-6 rounded-md border-primary hover:bg-primary hover:text-white hidden md:block">
            More...
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between space-y-5 md:space-y-0">
        {Trip.map((item, index) => (
          <div
            key={index}
            className="border rounded-md shadow-lg hover:shadow-xl hover:cursor-pointer"
            onClick={() => handleClick(item.tripId)}
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
              <div className="font-bold">
                {/* <Link to={`/post/${item.tripId}`}>{item.tripName}</Link> */}
              </div>
              <div className="font-semibold text-gray-400 flex flex-row items-center space-x-2 mt-2">
                <MdAccessTimeFilled />
                <div>{item.days} Days</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className=" md:hidden">
          <button className="border-2 p-2 rounded-md border-primary hover:bg-primary hover:text-white">
            View all Destination
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelStories;
