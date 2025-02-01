import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[45px] flex items-center p-4 bg-gray-800 shadow-md">
      {/* Left side symbol/logo */}
      <div className="flex items-center gap-2">
        <div className="flex justify-center items-center w-8 h-8 bg-orange-500 text-white text-2xl font-bold rounded-full animate-pulse">
          🔥
        </div>
        <span className="text-white font-semibold text-xl">My App</span>
      </div>

      {/* Centered Navbar Links */}
      <div className="flex-grow flex justify-center gap-6">
        {NavbarData.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold text-lg"
                : "text-white font-medium text-lg"
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
