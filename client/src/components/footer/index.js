// import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div>
            <h3 className="text-lg font-semibold text-white">Andronicus Lall and Team</h3>
            <p className="mt-2 text-sm text-white">
              © 2023. All rights reserved.
            </p>
          </div>
          {/* <div>
            <ul className="list-none flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  Contact
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
