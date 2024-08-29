import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export const PricingCardOne = () => {
  return (
    <>
      <h1 className="text-center text-4xl">Free</h1>
      <h2 className="text-lg text-center">$0/month</h2>
      <ul className="text-lg text-center py-24">
        <li className="my-1">Benefit 1</li>
        <Separator />
        <li className="my-1">Benefit 2</li>
        <Separator />
        <li className="my-1">Benefit 3</li>
      </ul>
      <Link to="/pricing" className="flex justify-center">
        <Button className="justify-self-end bg-white shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none">
          Select
        </Button>
      </Link>
    </>
  );
};

export const PricingCardTwo = () => {
  return (
    <>
      <h1 className="text-center text-4xl">Business</h1>
      <h2 className="text-lg text-center">$15/month</h2>
      <ul className="text-lg text-center py-24">
        <li className="my-1">Benefit 1</li>
        <Separator />
        <li className="my-1">Benefit 2</li>
        <Separator />
        <li className="my-1">Benefit 3</li>
      </ul>
      <Link to="/pricing" className="flex justify-center">
        <Button className="justify-self-end bg-white shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none">
          Select
        </Button>
      </Link>
    </>
  );
};

export const PricingCardThree = () => {
  return (
    <>
      <h1 className="text-center text-4xl">Professional</h1>
      <h2 className="text-lg text-center">$35/month</h2>
      <ul className="text-lg text-center py-24">
        <li className="my-1">Benefit 1</li>
        <Separator />
        <li className="my-1">Benefit 2</li>
        <Separator />
        <li className="my-1">Benefit 3</li>
      </ul>
      <Link to="/pricing" className="flex justify-center">
        <Button className="justify-self-end bg-white shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none">
          Select
        </Button>
      </Link>
    </>
  );
};
