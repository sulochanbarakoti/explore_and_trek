import { ImLocation2 } from "react-icons/im";
import { MdAccessTimeFilled } from "react-icons/md";
import { Trip } from "../../data";
import { useNavigate } from "react-router-dom";

const Destination = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log(id, "Button clicked");
    navigate(`/post/${id}`);
  };
  return (
    <div className="h-[90vh] w-full">
      <div className="px-20 py-9 flex justify-center items-center">
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
              <div className="px-3 py-5">
                <div className="flex flex-row items-center font-semibold space-x-2">
                  <ImLocation2 color="green" size={20} />
                  <div className="text-primary">
                    {item.tripDetails.ArrivalCity}
                  </div>
                </div>
                <div className="font-bold text-xl py-2">{item.tripName}</div>
                <div className="line-clamp-2">{item.overview}</div>
                <div className="font-semibold text-gray-400 flex flex-row items-center space-x-2 mt-2">
                  <MdAccessTimeFilled />
                  <div>{item.days} Days</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
