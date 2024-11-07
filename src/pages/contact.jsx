import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import images from "../assets/images";

const Contact = () => {
  return (
    <div className="m-5 container mx-auto">
      <div className="border border-2 rounded-lg flex flex-col md:flex-row">
        <div className="p-4 md:w-1/2">
          <div className="text-3xl font-bold">Travel with Us!</div>
          <div className="mt-2">
            Join us on an unforgettable travel experience that will leave you
            with memories to cherish for a lifetime.
          </div>
          <form className="p-3 space-y-4">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Please Give Your Tour Title*"
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="No of Traveler(s)*"
              className="w-full p-2 border rounded"
            />
            <textarea
              rows={4}
              placeholder="Message or Question?"
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="p-4 md:w-1/2 flex flex-col items-center">
          <img
            src={images.logo}
            alt="Logo"
            className="pt-5"
            style={{ width: "auto" }}
          />
          <div className="mt-5 text-2xl font-bold">Contact Information</div>
          <div className="flex items-center mt-2">
            <MdEmail className="mr-2" />
            exploreandtrekinnepal@gmail.com
          </div>
          <div className="flex items-center mt-2">
            <BiSolidPhoneCall className="mr-2" />
            0123456789
          </div>
          <div className="flex items-center mt-2">
            <ImLocation2 className="mr-2" />
            2025 M Street, NW, Washington, DC, 20036
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
