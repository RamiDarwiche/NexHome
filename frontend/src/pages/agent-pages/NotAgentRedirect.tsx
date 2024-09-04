import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotAgentRedirect = () => {
  return (
    <div className="absolute top-[40%] left-[22%]">
      <div className="flex flex-1 flex-col gap-y-6 items-center overflow-y-auto">
        <h1 className="text-2xl text-center">
          You must be registered as a real estate agent to view this resource
        </h1>
        <Link to="/">
          <Button className="bg-white shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotAgentRedirect;
