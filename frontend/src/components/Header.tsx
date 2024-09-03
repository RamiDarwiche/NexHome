import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import NavMenu from "./MainNav";

// TODO: change header links based on logged in user role
// maybe move dashboard link to profile dropdown
// current nav links can be reserved for public resources

const Header = () => {
  return (
    <div className="py-4">
      <div className="container mx-auto flex flex-start min-h-9">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-transparent mr-5 bg-gradient-to-b from-primary-sdlight1 to-primary-uilight3 bg-clip-text"
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
