import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavUserLinks from "./MobileNavUserLinks";
import { useGetMyUser } from "@/api/MyUserApi";

const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { currentUser } = useGetMyUser();

  return (
    <Sheet>
      <SheetTrigger className="mt-1">
        <Menu />
      </SheetTrigger>
      <SheetContent className="space-y-4">
        <SheetTitle>
          <span>Welcome to NexHome!</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col">
          <SheetClose asChild>
            <Link
              to="/"
              className="py-4 text-black text-sm font-medium focus:text-primary-sdlight1 hover:text-primary-sdlight1"
            >
              Home
            </Link>
          </SheetClose>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="focus:text-primary-sdlight1 hover:text-primary-sdlight1 border-none">
                Clients
              </AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-4">
                <SheetClose asChild>
                  <Link to="#" className="hover:text-primary-sdlight1">
                    Link 1
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="#" className="hover:text-primary-sdlight1">
                    Link 2
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="#" className="hover:text-primary-sdlight1">
                    Link 3
                  </Link>
                </SheetClose>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-none">
              <AccordionTrigger className="focus:text-primary-sdlight1 hover:text-primary-sdlight1">
                Agents
              </AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-4">
                <SheetClose asChild>
                  <Link
                    to="/agent/dashboard"
                    className="hover:text-primary-sdlight1"
                  >
                    Dashboard
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="#" className="hover:text-primary-sdlight1">
                    Pricing
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="#" className="hover:text-primary-sdlight1">
                    Link 3
                  </Link>
                </SheetClose>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <SheetClose asChild>
            <Link
              to="/about"
              className="py-4 text-black text-sm font-medium focus:text-primary-sdlight1 hover:text-primary-sdlight1"
            >
              About Us
            </Link>
          </SheetClose>

          <Separator />
          <div className="container px-0 flex-1 justify-end">
            {isAuthenticated ? (
              <Link to="/user-profile">
                <MobileNavUserLinks currentUser={currentUser} />
              </Link>
            ) : (
              <Button
                className="flex-1 bg-white shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none"
                onClick={async () => await loginWithRedirect()}
              >
                Log In
              </Button>
            )}
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
