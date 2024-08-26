import { Menu } from "lucide-react";
import {
  Sheet,
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

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="">
        <Menu />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          <span>Welcome to NexHome!</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Clients</AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-4">
                <Link to="#" className="hover:text-primary-sdlight1">
                  Link 1
                </Link>
                <Link to="#" className="hover:text-primary-sdlight1">
                  Link 2
                </Link>
                <Link to="#" className="hover:text-primary-sdlight1">
                  Link 3
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Realtors</AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-4">
                <Link to="#" className="hover:text-primary-sdlight1">
                  Link 1
                </Link>
                <Link to="#" className="hover:text-primary-sdlight1">
                  Link 2
                </Link>
                <Link to="#" className="hover:text-primary-sdlight1">
                  Link 3
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link to="/about" className="text-black text-sm font-medium">
            About Us
          </Link>
          <Separator />
          <Button className="flex-1 font-bold bg-primary-sdlight1">
            Log In
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
