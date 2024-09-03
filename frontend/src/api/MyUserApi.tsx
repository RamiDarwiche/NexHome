import { User } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyUserRequest = async (): Promise<User> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    return response.json();
  };

  const {
    data: currentUser,
    isLoading,
    error,
  } = useQuery("fetchCurrentUser", getMyUserRequest);

  if (error) {
    // toast.error(error.toString());
  }

  return { currentUser, isLoading };
};

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createMyUserRequest);

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};

type CreateUserProfileRequest = {
  fName: string;
  lName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  role: string;
  phone: string;
};
export const useCompleteMyUserProfile = () => {
  const navigate = useNavigate();
  const { getAccessTokenSilently } = useAuth0();

  const completeMyUserProfile = async (formData: CreateUserProfileRequest) => {
    const accessToken = await getAccessTokenSilently();
    const profileFlagCreatedObj = { profileCreated: true };
    const formDataWithProfileFlag = Object.assign(
      formData,
      profileFlagCreatedObj
    );

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataWithProfileFlag),
    });

    if (!response.ok) {
      throw new Error("Failed to update user");
    }

    return response.json();
  };

  const {
    mutateAsync: completeUserProfile,
    isLoading,
    error,
    isSuccess,
    reset,
  } = useMutation(completeMyUserProfile);

  if (isSuccess) {
    navigate("/");
  }

  if (error) {
    // toast.error(error.toString());
    reset();
  }

  return {
    completeUserProfile,
    isLoading,
  };
};

type updateUserRequest = {
  fName: string;
  lName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  role: string;
  phone: string;
};
export const useUpdateMyUserProfile = () => {
  const { currentUser } = useGetMyUser();
  const navigate = useNavigate();
  const { getAccessTokenSilently } = useAuth0();

  const updateMyUserProfile = async (formData: updateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    // Fill requirements for put, as role is not editable and profileCreated is guaranteed to be true here
    const profileFlagCreatedObjAndRole = {
      profileCreated: true,
      role: currentUser?.role,
    };
    const formDataWithProfileFlag = Object.assign(
      formData,
      profileFlagCreatedObjAndRole
    );

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataWithProfileFlag),
    });

    if (!response.ok) {
      throw new Error("Failed to update user");
    }

    return response.json();
  };

  const {
    mutateAsync: updateUserProfile,
    isLoading,
    error,
    reset,
  } = useMutation(updateMyUserProfile);

  if (error) {
    // toast.error(error.toString());
    reset();
  }

  return {
    updateUserProfile,
    isLoading,
  };
};
