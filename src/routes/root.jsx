import ActivitySearch from "../components/activity_search";
import Card from "../components/card";
import MainSlider from "../components/main_slider";
import NextDestination from "../components/nextDestination";
import TravelStories from "../components/travelStories";

const Root = () => {
  return (
    <div className="space-y-10">
      <div className="h-auto w-full">
        <MainSlider />
      </div>
      <div className="flex justify-center items-start">
        <ActivitySearch />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <NextDestination />
      </div>
      <div>
        <TravelStories />
      </div>
    </div>
  );
};

export default Root;
