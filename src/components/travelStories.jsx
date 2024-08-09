import images from "../assets/images";

const TravelStories = () => {
  return (
    <div className="space-y-2">
      <div className="mx-10 md:mx-36 font-semibold">
        Plan your trip to Nepal
      </div>
      <div className="mx-10 md:mx-36 flex flex-row justify-between">
        <div className="text-3xl font-bold">Where to next?</div>
        <button className="border-2 p-2 rounded-md border-primary hover:bg-primary hover:text-white">
          More...
        </button>
      </div>
      <div className="flex justify-end">
        <div className="mx-10 md:mx-36 hidden md:block"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mx-10 md:mx-36 space-y-5 md:space-y-0 space-x-0 md:space-x-10">
        <div>
          <div>
            <img src={images.trekingHimalayan} alt="" className="rounded-lg" />
          </div>
          <div>Himalayan Trek</div>
        </div>
        <div>
          <div>
            <img src={images.trekingCloud} alt="" className="rounded-lg" />
          </div>
          <div>Trekking above cloud</div>
        </div>
        <div>
          <div>
            <img src={images.elephantSafari} alt="" className="rounded-lg" />
          </div>
          <div>Elephant Safari in Chitwan</div>
        </div>
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
