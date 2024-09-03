import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotAgentRedirect = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-6 items-center overflow-y-auto">
      <h1 className="text-2xl text-center mt-96">
        You must be registered as a real estate agent to view this resource
      </h1>
      <Link to="/">
        <Button className="bg-white shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none">
          Return to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotAgentRedirect;
