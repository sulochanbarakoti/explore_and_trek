import images from "../assets/images";

const NextDestination = () => {
  return (
    <div className="space-y-2 mx-10">
      <div className="font-semibold">Plan your trip to Nepal</div>
      <div className=" text-3xl font-bold">Where to next?</div>
      <div className="flex justify-end">
        <div className="hidden md:block">
          <button className="border-2 p-2 rounded-md border-primary hover:bg-primary hover:text-white">
            View all Destination
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 space-y-5 md:space-y-0">
        <div>
          <div>
            <img src={images.trekingHimalayan} alt="" className="rounded-lg" />
          </div>
          <div className="text-md font-bold p-2">Himalayan Trek</div>
        </div>
        <div>
          <div>
            <img src={images.trekingCloud} alt="" className="rounded-lg" />
          </div>
          <div className="text-md font-bold p-2">Trekking above cloud</div>
        </div>
        <div>
          <div>
            <img src={images.elephantSafari} alt="" className="rounded-lg" />
          </div>
          <div className="text-md font-bold p-2">
            Elephant Safari in Chitwan
          </div>
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

export default NextDestination;
