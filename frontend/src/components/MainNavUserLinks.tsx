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
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "@/types";
import { Skeleton } from "./ui/skeleton";

type Props = {
  avatar: string;
  currentUser: User;
};

const MainNavUserLinks = ({ avatar, currentUser }: Props) => {
  const { logout } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex flex-1 items-center font-medium hover:text-primary-sdlight2 gap-2">
        {currentUser ? (
          <>
            <Avatar>
              <AvatarImage src={avatar} />
              <AvatarFallback className="font-medium">RD</AvatarFallback>
            </Avatar>
            <div className="flex text-nowrap">{`${currentUser?.fName} ${currentUser?.lName}`}</div>
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
          <Link to="/user-profile" className="font-medium ">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem className="my-1 focus:bg-white">
          <Button
            onClick={() =>
              logout({ logoutParams: { returnTo: "http://localhost:5173" } })
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

export default MainNavUserLinks;
