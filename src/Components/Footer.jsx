import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        <div>
          <h2 className="text-2xl font-bold text-white">SwiftBuy</h2>
          <p className="mt-3 text-sm">
            Your one-stop destination for premium gadgets and accessories.
          </p>

          <div className="flex gap-4 mt-4 text-xl">
            <a href="#">
              <FaFacebook className=" hover:text-blue-500" />
            </a>
            <a href="#">
              <FaInstagram className=" hover:text-pink-500" />
            </a>
            <a href="#">
              <FaTwitter className=" hover:text-blue-800" />
            </a>
            <a href="#">
              <FaYoutube className=" hover:text-red-500" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/deals" className="hover:text-white">
                Deals
              </Link>
            </li>
            <li>
              <Link to="/new-arrivals" className="hover:text-white">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link to="/packages" className="hover:text-white">
                Packages
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Support</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link to="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/returns" className="hover:text-white">
                Return Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Contact Us</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Email: support@swiftbuy.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 border-t border-gray-700 pt-4 text-sm">
        © {new Date().getFullYear()} SwiftBuy — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
