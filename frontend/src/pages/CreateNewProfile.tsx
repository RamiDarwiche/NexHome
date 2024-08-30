import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import Footer from "@/components/Footer";
import CreateNewProfileForm from "@/components/forms/user-profile/CreateNewProfileForm";
import BlurFade from "@/components/magicui/blur-fade";

const CreateNewProfile = () => {
  const { currentUser } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();
  console.log(currentUser);

  return (
    <div className="flex flex-col flex-1 overflow-y-auto min-h-screen max-w-screen">
      <div className="flex h-full flex-1 flex-col items-center justify-center -mt-36 overflow-y-auto">
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
            currentUser={currentUser}
            onSave={updateUser}
            isLoading={isUpdateLoading}
          />
        </BlurFade>
      </div>
      <Footer />
    </div>
  );
};

export default CreateNewProfile;
