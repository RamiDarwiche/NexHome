import { useGetMyAgent, useUpdateMyAgentProfile } from "@/api/MyAgentApi";
import ScaleLoader from "react-spinners/ScaleLoader";
import EditAgentProfileForm from "@/components/forms/user-profile/EditAgentProfileForm";

const AgentProfile = () => {
  const { currentAgent } = useGetMyAgent();

  const {
    updateAgentProfile,
    isLoading: isUpdateLoading,
    isSuccess,
  } = useUpdateMyAgentProfile();

  return (
    <div className="flex flex-col justify-center">
      {currentAgent ? (
        <>
          <EditAgentProfileForm
            currentAgent={currentAgent}
            onSave={updateAgentProfile}
            isLoading={isUpdateLoading}
            isSuccess={isSuccess}
          />

          <span className="ml-7 text-xs">
            Account type: {currentAgent.role}
          </span>
        </>
      ) : (
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
      )}
    </div>
  );
};

export default AgentProfile;
