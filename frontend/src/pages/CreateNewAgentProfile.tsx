import { useGetMyAgent, useCompleteMyAgentProfile } from "@/api/MyAgentApi";
import Footer from "@/components/Footer";
import CreateNewProfileForm from "@/components/forms/user-profile/CreateNewAgentProfileForm";
import BlurFade from "@/components/magicui/blur-fade";
import { useNavigate } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

const CreateNewAgentProfile = () => {
  const { currentAgent } = useGetMyAgent();
  const { completeAgentProfile, isLoading: isUpdateLoading } =
    useCompleteMyAgentProfile();
  const navigate = useNavigate();

  return (
    <>
      {/* first ternary operator displays loading element while fetching current user */}
      {currentAgent ? (
        // if current user already has a created profile redirect to homepage
        currentAgent?.profileCreated ? (
          navigate("/")
        ) : (
          <div className="flex flex-col flex-1 overflow-y-auto min-h-screen max-w-screen">
            <div className="flex h-full flex-1 flex-col items-center justify-center mb-36">
              <div className="flex flex-col justify-center items-center ">
                <BlurFade delay={0.25} yOffset={-6} duration={0.6} inView>
                  <h2 className="text-6xl font-medium tracking-tighter text-transparent bg-gradient-to-b from-primary-sdlight1 to-primary-uilight3 bg-clip-text pointer-events-none select-none">
                    NexHome
                  </h2>
                </BlurFade>
                <BlurFade delay={0.25 * 3} yOffset={-3} duration={0.8} inView>
                  <h3 className="text-xl pt-3 tracking-tighter pointer-events-none select-none">
                    Lets get to know each other
                  </h3>
                </BlurFade>
              </div>

              <BlurFade
                delay={0.25 * 6}
                yOffset={-6}
                duration={0.6}
                inView
                className="flex w-full flex-shrink justify-center"
              >
                <CreateNewProfileForm
                  currentAgent={currentAgent}
                  onSave={completeAgentProfile}
                  isLoading={isUpdateLoading}
                />
              </BlurFade>
            </div>
            <Footer />
          </div>
        )
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
    </>
  );
};

export default CreateNewAgentProfile;
