import ActivitySearch from "../components/activity_search";
import BlogPosts from "../components/blogposts";
import Card from "../components/card";
import Feature from "../components/feature";
import Footer from "../components/footer";
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
        <Feature />
      </div>
      <div>
        <TravelStories />
      </div>
      <div>
        <BlogPosts />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
