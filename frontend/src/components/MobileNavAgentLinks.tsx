import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { Agent } from "@/types";
import { SheetClose } from "./ui/sheet";

type Props = {
  currentAgent: Agent;
};

const MobileNavAgentLinks = ({ currentAgent }: Props) => {
  const { logout } = useAuth0();

  return (
    <div className="flex flex-row justify-between mt-1 text-center">
      <SheetClose asChild>
        <Link
          to="/agent-profile"
          className="flex flex-1 py-4 items-center font-medium focus:text-primary-sdlight1 hover:text-primary-sdlight1"
        >
          {/* change from generic to first, last or email */}
          {`${currentAgent.fName} ${currentAgent.lName}`}
        </Link>
      </SheetClose>
      <Button
        className="my-2 bg-white shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none"
        onClick={() => {
          logout({ logoutParams: { returnTo: "http://localhost:5173" } });
        }}
      >
        Log Out
      </Button>
    </div>
  );
};

export default MobileNavAgentLinks;
