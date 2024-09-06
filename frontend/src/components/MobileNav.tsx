import { Menu, Moon, Sun } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
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
import MobileNavAgentLinks from "./MobileNavAgentLinks";
import { useGetMyAgent } from "@/api/MyAgentApi";
import { useTheme } from "./theme-provider";
import { useState, useEffect } from "react";

const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { currentAgent } = useGetMyAgent();
  const { setTheme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("vite-ui-theme") == "dark") {
      setDarkTheme(true);
    }
  }, []);

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
              className="py-4 text-black dark:text-white text-sm font-medium focus:text-primary-sdlight1 hover:text-primary-sdlight1"
            >
              Home
            </Link>
          </SheetClose>
          <Accordion
            type="single"
            collapsible
            className="w-full dark:text-white"
          >
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="focus:text-primary-sdlight1 hover:text-primary-sdlight1 border-none">
                Clients
              </AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-4 dark:text-white">
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
            <AccordionItem
              value="item-2"
              className="border-none dark:text-white"
            >
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
              className="py-4 text-black dark:text-white text-sm font-medium focus:text-primary-sdlight1 hover:text-primary-sdlight1"
            >
              About Us
            </Link>
          </SheetClose>

          <Separator />
          <div className="container px-0 flex-1 justify-end">
            {isAuthenticated ? (
              <Link to="/user-profile">
                <MobileNavAgentLinks currentAgent={currentAgent} />
              </Link>
            ) : (
              <Button
                className="flex-1 bg-white shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none"
                onClick={async () => await loginWithRedirect()}
              >
                Agent Log In
              </Button>
            )}
          </div>
        </SheetDescription>
        <div className=""></div>
        <SheetFooter className="absolute bottom-5 right-5">
          {/* ill move this eventually but its here to save my eyes in development */}
          {darkTheme ? (
            <Button
              className="ml-3"
              variant="ghost"
              size="icon"
              onClick={() => {
                setTheme("light");
                setDarkTheme(false);
              }}
            >
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          ) : (
            <Button
              className="ml-3"
              variant="ghost"
              size="icon"
              onClick={() => {
                setTheme("dark");
                setDarkTheme(true);
              }}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            </Button>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
