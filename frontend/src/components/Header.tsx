import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import NavMenu from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-primary-bdlight1 py-4">
      <div className="container mx-auto flex flex-start min-h-9">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-primary-sdlight1 mr-5"
        >
          NexHome
        </Link>
        <div className="md:hidden flex flex-1 self-center justify-end">
          <MobileNav />
        </div>
        <div className="hidden md:block flex-1">
          <NavMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
