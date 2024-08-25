import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <span className="flex justify-between items-center">
      <div className="container space-x-2.5 px-0">
        <Link
          to="/about"
          className="font-bold text-secondary-aclight2 hover:text-primary-sdlight1"
        >
          About
        </Link>
        <Link
          to="/realtors"
          className="font-bold text-secondary-aclight2 hover:text-primary-sdlight1"
        >
          Realtors
        </Link>
        <Link
          to="/clients"
          className="font-bold text-secondary-aclight2 hover:text-primary-sdlight1"
        >
          Clients
        </Link>
        <Link
          to="/pricing"
          className="font-bold text-secondary-aclight2 hover:text-primary-sdlight1"
        >
          Pricing
        </Link>
      </div>
      <div className="container px-0 flex justify-end">
        <Button
          variant="ghost"
          className="font-bold text-secondary-aclight2 hover:text-primary-sdlight1 hover:bg-white"
        >
          Log In
        </Button>
      </div>
    </span>
  );
};

export default MainNav;
