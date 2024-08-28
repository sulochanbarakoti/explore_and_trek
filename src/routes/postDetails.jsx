import { useParams } from "react-router-dom";
import { Trip } from "../../data";
import { useEffect } from "react";

const PostDetails = () => {
  const { id } = useParams();
  const post = Trip.find((trip) => trip.tripId === parseInt(id));

  // Scroll to the top whenever the component mounts or when `id` changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="mx-5 md:mx-48 mt-10">
      {/* Header Section */}
      <div className="flex justify-between items-end border-b pb-4">
        <div className="text-xl md:text-4xl font-bold text-gray-800">
          {post.tripName}
        </div>
        <div className="text-sm md:text-lg text-gray-600 font-semibold">
          {post.days} Days
        </div>
      </div>

      {/* Image Section */}
      <div className="py-10">
        <img
          src={post.image}
          alt={post.tripName}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Overview Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
        {post.overview.map((paragraph, index) => (
          <p
            key={index}
            className="text-gray-700 text-justify mb-4 leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Trip Details Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Trip Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <strong>Accommodation:</strong> {post.tripDetails.accomodation}
          </div>
          <div>
            <strong>Arrival City:</strong> {post.tripDetails.arrivalCity}
          </div>
          <div>
            <strong>Best Season:</strong> {post.tripDetails.bestSeason}
          </div>
          <div>
            <strong>Guide:</strong> {post.tripDetails.guide}
          </div>
          <div>
            <strong>Maximum Altitude:</strong>{" "}
            {post.tripDetails.maximumAltitude}
          </div>
          <div>
            <strong>Meals:</strong> {post.tripDetails.meals}
          </div>
          <div>
            <strong>Transportation:</strong> {post.tripDetails.transportation}
          </div>
          <div>
            <strong>WiFi:</strong> {post.tripDetails.wifi}
          </div>
        </div>
      </div>

      {/* Itinerary Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Itinerary</h2>
        <ul className="list-decimal list-inside text-gray-700 space-y-2">
          {post.itinerary.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Cost Excluded Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Cost Excluded</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {post.costExcluded.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostDetails;
