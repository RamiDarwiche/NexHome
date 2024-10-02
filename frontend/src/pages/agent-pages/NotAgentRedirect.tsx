import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotAgentRedirect = () => {
  return (
    // close enough
    <div className="flex justify-center pt-[400px]">
      <div className="flex flex-1 flex-col gap-y-6 items-center overflow-y-auto">
        <h1 className="text-2xl text-center">
          You must be registered as a real estate agent to view this resource
        </h1>
        <Link to="/">
          <Button className="bg-white dark:bg-primary-sdlight2 dark:text-white dark:hover:bg-primary-aclight1 dark:border-none dark:shadow-none shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotAgentRedirect;
