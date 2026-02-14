import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import newsletterImage1 from "../assets/newsletterImage1.png";
import newsletterImage2 from "../assets/newsletterImage2.png";

const NewsLetter = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto mt-16 px-4 p-10">
        <div className="relative bg-base-100 shadow-xl rounded-2xl overflow-hidden p-5">
          {/* Left Model Image */}
          <img
            src={newsletterImage1}
            alt="fashion model"
            className="hidden lg:block absolute left-0 bottom-0 h-90"
          />

          {/* Right Model Image */}
          <img
            src={newsletterImage2}
            alt="fashion model"
            className="hidden lg:block absolute right-0 bottom-0 h-90"
          />

          {/* Content */}
          <div className="text-center py-20 px-6 lg:px-40">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subscribe To Our Newsletter
            </h2>

            <p className="text-gray-500 max-w-xl mx-auto mb-8">
              Get the latest updates, exclusive offers, and new arrivals from
              <span className="font-semibold text-primary"> SwiftBuy</span>{" "}
              straight to your inbox.
            </p>

            {/* Input + Button */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <label className="input input-bordered flex items-center gap-2 w-full md:w-96">
                <FaEnvelope className="text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="grow"
                />
              </label>

              <button className="btn btn-primary gap-2">
                Subscribe Now
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
