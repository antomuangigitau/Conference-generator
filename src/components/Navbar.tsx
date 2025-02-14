import { Link, NavLink } from "react-router";
import Ticz from "../assets/ticz.svg";
import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 border border-[#197686] max-w-7xl mx-auto rounded-3xl">
      <Link to="/">
        <img src={Ticz} alt="Ticz" />
      </Link>
      <ul className="hidden sm:flex gap-3 md:gap-8 ">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white" : "text-[#B3B3B3]"
          }
          to="/events">
          Events
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white" : "text-[#B3B3B3]"
          }
          to="/mytickets">
          {" "}
          My Tickets
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white" : "text-[#B3B3B3]"
          }
          to="/about">
          About Project
        </NavLink>
      </ul>
      <Button variant="ticket">
        My Tickets <MoveRight />
      </Button>
    </nav>
  );
};

export default Navbar;
