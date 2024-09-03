import { useGetMyUser } from "@/api/MyUserApi";
import AgentDash from "@/components/agent-pages-components/AgentDash";
import { useAuth0 } from "@auth0/auth0-react";
import ScaleLoader from "react-spinners/ScaleLoader";
import NotAgentRedirect from "./NotAgentRedirect";

const AgentLanding = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { isAuthenticated, isLoading: isAuthLoading } = useAuth0();

  // need to find new way to represent loading state
  const isLoggedInAgent = isAuthenticated && currentUser?.role == "Agent";

  return (
    <>
      {/* fix loading conditional to timeout faster if not authenticated/not agent */}
      {isGetLoading || isAuthLoading ? (
        <div className="absolute top-[45%] left-1/2">
          <ScaleLoader
            height={40}
            margin={2}
            color="#A4DAF5"
            speedMultiplier={1.1}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="h-inherit">
          {isLoggedInAgent ? (
            <AgentDash currentUser={currentUser} />
          ) : (
            <h1>
              <NotAgentRedirect />
            </h1>
          )}
        </div>
      )}
    </>
  );
};

export default AgentLanding;
