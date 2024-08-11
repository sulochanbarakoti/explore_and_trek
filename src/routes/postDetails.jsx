import { useParams } from "react-router-dom";
import { Trip } from "../../data";

const PostDetails = () => {
  const { id } = useParams();
  const post = Trip.find((trip) => trip.tripId === parseInt(id));
  return (
    <div className="mx-5 md:mx-48 mt-10">
      <div className="flex items-end">
        <div className="text-xl md:text-3xl font-bold w-[50%]">
          {post.tripName}
        </div>
        <div className="text-sm md:text-lg text-gray-400 font-bold">
          {post.days} Days
        </div>
      </div>
      <div className="py-10">
        <img src={post.image} alt="" className="object-cover" />
      </div>
    </div>
  );
};

export default PostDetails;
