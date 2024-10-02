import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Agent } from "@/types";
import { Skeleton } from "./ui/skeleton";

type Props = {
  currentAgent: Agent;
};

const MainNavAgentLinks = ({ currentAgent }: Props) => {
  const { logout } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex flex-1 items-center font-medium hover:text-primary-sdlight2 gap-2">
        {currentAgent ? (
          <>
            <Avatar>
              <AvatarFallback className="font-medium">TP</AvatarFallback>
            </Avatar>
            <div className="flex text-nowrap">{`${currentAgent?.fName} ${currentAgent?.lName}`}</div>
          </>
        ) : (
          <div className="flex items-center space-x-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[120px]" />
            </div>
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="my-1 justify-center">
          <Link to="/agent-profile" className="font-medium ">
            Agent Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem className="my-1 focus:bg-white">
          <Button
            onClick={() =>
              logout({
                logoutParams: { returnTo: "https://nexhome-1.onrender.com/" },
              })
            }
            className="flex flex-1 bg-white shadow-primary-uilight3 text-primary-sdlight2 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MainNavAgentLinks;
