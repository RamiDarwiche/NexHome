import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { User } from "@/types";

type Props = {
  currentUser: User;
};

const MobileNavUserLinks = ({ currentUser }: Props) => {
  const { logout } = useAuth0();

  return (
    <div>
      <Link
        to="/user-profile"
        className="flex items-center font-medium focus:text-primary-sdlight1 hover:text-primary-sdlight1"
      >
        {/* change from generic to first, last or email */}
        {`${currentUser.fName} ${currentUser.lName}`}
      </Link>
      <Button
        className="my-4 bg-white shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none"
        onClick={() => {
          logout({ logoutParams: { returnTo: "http://localhost:5173" } });
        }}
      >
        Log Out
      </Button>
    </div>
  );
};

export default MobileNavUserLinks;
