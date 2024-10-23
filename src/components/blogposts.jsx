import images from "../assets/images";

const BlogPosts = () => {
  const blogsData = [
    {
      thumbnail: images.pokhara,
      date: "Mar 16, 2024",
      category: "Explore City",
      title: "Beautiful city of Pokhara",
      description:
        "Pokhara is a city on Phewa Lake, in central Nepal. It’s known as a gateway to the Annapurna Circuit, a popular trail in the Himalayas. Tal Barahi Temple, a 2-story pagoda, sits on an island in the lake.",
      logo: images.logo,
      author: "Sulochan Barakoti",
      position: "Founder / Admin",
    },
    {
      thumbnail: images.chitwan,
      date: "Apr 10, 2024",
      category: "Explore City",
      title: "Wildlife Adventure in Chitwan",
      description:
        "Chitwan National Park, located in south-central Nepal, is a UNESCO World Heritage Site renowned for its biodiversity. Experience the thrill of jungle safaris, witness majestic Bengal tigers, one-horned rhinoceros, and a myriad of bird species in their natural habitat.",
      logo: images.logo,
      author: "Sulochan Barakoti",
      position: "Founder / Admin",
    },
    {
      thumbnail: images.helicopter,
      date: "May 5, 2024",
      category: "Adventure Experience",
      title: "Helicopter Tour of the Himalayas",
      description:
        "Embark on an exhilarating helicopter ride over the towering peaks of the Himalayas. Witness the grandeur of Mount Everest, Annapurna, and other iconic summits from a breathtaking vantage point. This unforgettable journey offers panoramic views that are both awe-inspiring and humbling.",
      logo: images.logo,
      author: "Sulochan Barakoti",
      position: "Founder / Admin",
    },
  ];

  return (
    <div className="bg-white mb-4">
      <div className="mx-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our best blog posts
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to explore Nepal with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {blogsData.map((items, index) => (
            <article
              key={index}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="mb-5">
                <img src={items.thumbnail} alt="" className="rounded-lg" />
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2020-03-16" className="text-gray-500">
                  {items.date}
                </time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {items.category}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    {items.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {items.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={images.logo}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Sulochan Barakoti
                    </a>
                  </p>
                  <p className="text-gray-600">Founder / Admin</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
