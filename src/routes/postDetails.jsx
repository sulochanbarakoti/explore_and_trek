import { useParams } from "react-router-dom";
import { Trip } from "../../data";
import { useEffect, useState } from "react";

const PostDetails = () => {
  const { id } = useParams();
  const post = Trip.find((trip) => trip.tripId === parseInt(id));
  const [activeTab, setActiveTab] = useState("itinerary"); // Default active tab

  // Scroll to the top whenever the component mounts or when `id` changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    // <div className="mx-5 md:mx-48 mt-10">
    //   {/* Header Section */}
    //   <div className="flex justify-between items-end border-b pb-4">
    //     <div className="text-xl md:text-4xl font-bold text-gray-800">
    //       {post.tripName}
    //     </div>
    //     <div className="text-sm md:text-lg text-gray-600 font-semibold">
    //       {post.days} Days
    //     </div>
    //   </div>

    //   {/* Image Section */}
    //   <div className="py-10">
    //     <img
    //       src={post.image}
    //       alt={post.tripName}
    //       className="w-full h-96 object-cover rounded-lg shadow-md"
    //     />
    //   </div>

    //   {/* Overview Section */}
    //   <div className="mt-10">
    //     <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
    //     {post.overview.map((paragraph, index) => (
    //       <p
    //         key={index}
    //         className="text-gray-700 text-justify mb-4 leading-relaxed"
    //       >
    //         {paragraph}
    //       </p>
    //     ))}
    //   </div>

    //   {/* Trip Details Section */}
    //   <div className="mt-10">
    //     <h2 className="text-2xl font-bold text-gray-800 mb-4">Trip Details</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
    //       <div>
    //         <strong>Accommodation:</strong> {post.tripDetails.accomodation}
    //       </div>
    //       <div>
    //         <strong>Arrival City:</strong> {post.tripDetails.arrivalCity}
    //       </div>
    //       <div>
    //         <strong>Best Season:</strong> {post.tripDetails.bestSeason}
    //       </div>
    //       <div>
    //         <strong>Guide:</strong> {post.tripDetails.guide}
    //       </div>
    //       <div>
    //         <strong>Maximum Altitude:</strong>{" "}
    //         {post.tripDetails.maximumAltitude}
    //       </div>
    //       <div>
    //         <strong>Meals:</strong> {post.tripDetails.meals}
    //       </div>
    //       <div>
    //         <strong>Transportation:</strong> {post.tripDetails.transportation}
    //       </div>
    //       <div>
    //         <strong>WiFi:</strong> {post.tripDetails.wifi}
    //       </div>
    //     </div>
    //   </div>

    //   {/* Itinerary Section */}
    //   <div className="mt-10">
    //     <h2 className="text-2xl font-bold text-gray-800 mb-4">Itinerary</h2>
    //     <ul className="list-decimal list-inside text-gray-700 space-y-2">
    //       {post.itinerary.map((item, index) => (
    //         <li key={index} className="leading-relaxed">
    //           {item}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>

    //   {/* Cost Excluded Section */}
    //   <div className="mt-10">
    //     <h2 className="text-2xl font-bold text-gray-800 mb-4">Cost Excluded</h2>
    //     <ul className="list-disc list-inside text-gray-700 space-y-2">
    //       {post.costExcluded.map((item, index) => (
    //         <li key={index} className="leading-relaxed">
    //           {item}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <div className="mx-5 md:mx-48 mt-10">
      {/* Header Section */}
      <div className="flex justify-between items-end border-b pb-4 border-gray-300">
        <div className="text-xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
          {post.tripName}
        </div>
        <div className="text-sm md:text-lg text-gray-500 font-medium bg-gray-200 px-3 py-1 rounded-full">
          {post.days} Days
        </div>
      </div>

      {/* Image Section */}
      <div className="py-10 relative">
        <img
          src={post.image}
          alt={post.tripName}
          className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
        <div className="absolute bottom-5 left-5 bg-gray-900 bg-opacity-60 text-white p-2 rounded-lg shadow-md">
          <span className="text-lg md:text-xl font-semibold">
            Starting at:{" "}
          </span>
          <span className="text-2xl md:text-3xl font-bold">${post.price}</span>
        </div>
      </div>

      {/* Overview Section */}
      <div className="mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-l-4 border-gray-500 pl-4">
          Overview
        </h2>
        {post.overview.map((paragraph, index) => (
          <p
            key={index}
            className="text-gray-700 text-lg md:text-xl text-justify mb-6 leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Trip Details Section */}
      <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-l-4 border-gray-500 pl-4">
          Trip Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
          {Object.entries(post.tripDetails).map(([key, value], index) => (
            <div key={index} className="flex items-center">
              <span className="font-semibold mr-2">
                {key.replace(/([A-Z])/g, " $1") + ":"}
              </span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mt-12">
        <div className="flex border-b border-gray-300">
          <button
            className={`text-xl px-4 py-2 focus:outline-none ${
              activeTab === "itinerary"
                ? "text-gray-900 font-bold border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("itinerary")}
          >
            Itinerary
          </button>
          <button
            className={`text-xl px-4 py-2 focus:outline-none ${
              activeTab === "costExcluded"
                ? "text-gray-900 font-bold border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("costExcluded")}
          >
            Cost Excluded
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "itinerary" && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Itinerary
              </h2>
              <ul className="list-decimal list-inside text-gray-700 space-y-4 text-lg md:text-xl">
                {post.itinerary.map((item, index) => (
                  <li
                    key={index}
                    className="leading-relaxed bg-gray-50 p-4 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "costExcluded" && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Cost Excluded
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-4 text-lg md:text-xl">
                {post.costExcluded.map((item, index) => (
                  <li
                    key={index}
                    className="leading-relaxed bg-gray-50 p-4 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
