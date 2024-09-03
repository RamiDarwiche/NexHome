import { useGetMyUser, useUpdateMyUserProfile } from "@/api/MyUserApi";
import { useNavigate } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import EditUserProfileForm from "@/components/forms/user-profile/EditUserProfileForm";

const UserProfile = () => {
  const { currentUser } = useGetMyUser();
  const { updateUserProfile, isLoading: isUpdateLoading } =
    useUpdateMyUserProfile();

  return (
    <div className="flex justify-center">
      {currentUser ? (
        <EditUserProfileForm
          currentUser={currentUser}
          onSave={updateUserProfile}
          isLoading={isUpdateLoading}
        />
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

export default UserProfile;
