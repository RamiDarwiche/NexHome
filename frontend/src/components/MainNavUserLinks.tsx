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

type Props = {
  avatar: string;
  currentUser: User;
};

const MainNavUserLinks = ({ avatar, currentUser }: Props) => {
  const { logout } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center font-medium hover:text-primary-sdlight2 gap-2">
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback className="font-medium">RD</AvatarFallback>
        </Avatar>
        {currentUser?.fName}
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
