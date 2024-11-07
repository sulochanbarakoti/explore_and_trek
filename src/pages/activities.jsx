import images from "../assets/images";

const Activities = () => {
  const activities = [
    {
      title: "Everest Base Camp Trek",
      description:
        "A thrilling trek to the base of the world's highest peak. Experience breathtaking views and rich Sherpa culture.",
      image: images.everestBaseCamp,
      blogLink: "/blog/everest-base-camp-trek",
    },
    {
      title: "Annapurna Circuit",
      description:
        "Experience diverse landscapes and cultures on this classic trek. Discover lush valleys and majestic mountains.",
      image: images.annapurnaCircuit,
      blogLink: "/blog/annapurna-circuit",
    },
    {
      title: "Langtang Valley Trek",
      description:
        "Explore the beautiful Langtang Valley and its stunning mountains. A perfect blend of nature and adventure.",
      image: images.langtangValley,
      blogLink: "/blog/langtang-valley-trek",
    },
    {
      title: "Gosaikunda Trek",
      description:
        "A serene trek to the sacred lakes of Gosaikunda. Ideal for spiritual seekers and nature lovers.",
      image: images.gosaikunda,
      blogLink: "/blog/gosaikunda-trek",
    },
    {
      title: "Paragliding in Pokhara",
      description:
        "Soar high above the stunning landscapes of Pokhara. Experience the thrill of flying with panoramic views.",
      image: images.paragliding,
      blogLink: "/blog/paragliding-pokhara",
    },
    {
      title: "Rafting in Bhote Koshi",
      description:
        "Experience the adrenaline rush of rafting in the Bhote Koshi river. A perfect adventure for thrill-seekers.",
      image: images.rafting,
      blogLink: "/blog/rafting-bhote-koshi",
    },
  ];

  return (
    <div className="h-auto w-full flex flex-col items-center bg-gray-50 p-5">
      <h1 className="text-4xl font-bold mb-10">
        Adventure Activities in Nepal
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2">{activity.title}</h2>
              <p className="text-gray-700 mb-4">{activity.description}</p>
              <a
                href={activity.blogLink}
                className="text-blue-500 hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <p className="text-lg">
          Ready for your adventure? Contact us to learn more!
        </p>
        <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Activities;
