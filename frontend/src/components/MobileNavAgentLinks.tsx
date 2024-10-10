import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { Agent } from "@/types";
import { SheetClose } from "./ui/sheet";

type Props = {
  currentAgent: Agent;
};

/*
todo: fix edge case where clicking on mobile nav icon while awaiting auth makes the page blank
*/

const MobileNavAgentLinks = ({ currentAgent }: Props) => {
  const { logout } = useAuth0();

  return (
    <div className="flex flex-row justify-between mt-1 text-center">
      <SheetClose asChild>
        <Link
          to="/agent/profile"
          className="flex flex-1 py-4 items-center font-medium focus:text-primary-sdlight1 hover:text-primary-sdlight1"
        >
          {/* change from generic to first, last or email */}
          {`${currentAgent.fName} ${currentAgent.lName}`}
        </Link>
      </SheetClose>
      <Button
        className="my-2 dark:bg-primary-sdlight2 dark:text-white dark:hover:bg-primary-aclight1 bg-white shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none"
        onClick={() => {
          // change to localhost:5173 in dev
          logout({
            logoutParams: { returnTo: "https://nexhome-1.onrender.com/" },
          });
        }}
      >
        Log Out
      </Button>
    </div>
  );
};

export default MobileNavAgentLinks;
