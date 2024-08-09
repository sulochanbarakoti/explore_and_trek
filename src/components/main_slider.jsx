import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import images from "../assets/images";

const MainSlider = () => {
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={500}
        centerMode={false}
        className=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <img
          src={images.trekingHimalayan}
          style={{
            display: "block",
            height: "100%",
            margin: "auto",
            width: "100%",
          }}
        />
        <img
          src={images.elephantSafari}
          style={{
            display: "block",
            height: "100%",
            margin: "auto",
            width: "100%",
          }}
        />
        <img
          src={images.trekingCloud}
          style={{
            display: "block",
            height: "100%",
            margin: "auto",
            width: "100%",
          }}
        />
      </Carousel>
    </div>
  );
};

export default MainSlider;
