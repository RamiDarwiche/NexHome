import { Agent } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyAgent = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyAgentRequest = async (): Promise<Agent> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/agent`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch agent");
    }

    return response.json();
  };

  const {
    data: currentAgent,
    isLoading,
    error,
  } = useQuery("fetchCurrentAgent", getMyAgentRequest);

  if (error) {
    // toast.error(error.toString());
  }

  return { currentAgent, isLoading };
};

type CreateAgentRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyAgent = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyAgentRequest = async (agent: CreateAgentRequest) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/agent`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(agent),
    });

    if (!response.ok) {
      throw new Error("Failed to create agent");
    }
  };

  const {
    mutateAsync: createAgent,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createMyAgentRequest);

  return {
    createAgent,
    isLoading,
    isError,
    isSuccess,
  };
};

type CreateAgentProfileRequest = {
  // surely i will never regret making this all optional
  fName?: string;
  lName?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  role?: string;
  phone?: string;
};
export const useCompleteMyAgentProfile = () => {
  const navigate = useNavigate();
  const { getAccessTokenSilently } = useAuth0();

  const completeMyAgentProfile = async (
    formData: CreateAgentProfileRequest
  ) => {
    const accessToken = await getAccessTokenSilently();
    const profileFlagCreatedObj = { profileCreated: true };
    const formDataWithProfileFlag = Object.assign(
      formData,
      profileFlagCreatedObj
    );

    const response = await fetch(`${API_BASE_URL}/api/my/agent`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataWithProfileFlag),
    });

    if (!response.ok) {
      throw new Error("Failed to update agent");
    }

    return response.json();
  };

  const {
    mutateAsync: completeAgentProfile,
    isLoading,
    error,
    isSuccess,
    reset,
  } = useMutation(completeMyAgentProfile);

  if (isSuccess) {
    navigate("/");
  }

  if (error) {
    // toast.error(error.toString());
    reset();
  }

  return {
    completeAgentProfile,
    isLoading,
  };
};

type updateAgentRequest = {
  fName: string;
  lName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  role: string;
  phone: string;
};
export const useUpdateMyAgentProfile = () => {
  const { currentAgent } = useGetMyAgent();
  const { getAccessTokenSilently } = useAuth0();

  const updateMyAgentProfile = async (formData: updateAgentRequest) => {
    const accessToken = await getAccessTokenSilently();
    // Fill requirements for put, as role is not editable and profileCreated is guaranteed to be true here
    const profileFlagCreatedObjAndRole = {
      profileCreated: true,
      role: currentAgent?.role,
    };
    const formDataWithProfileFlag = Object.assign(
      formData,
      profileFlagCreatedObjAndRole
    );

    const response = await fetch(`${API_BASE_URL}/api/my/agent`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataWithProfileFlag),
    });

    if (!response.ok) {
      throw new Error("Failed to update agent");
    }

    return response.json();
  };

  const {
    mutateAsync: updateAgentProfile,
    isLoading,
    error,
    isSuccess,
    reset,
  } = useMutation(updateMyAgentProfile);

  // Refreshing page for now to instantly update form heading and header profile name
  if (isSuccess) {
    window.location.reload();
  }

  if (error) {
    // toast.error(error.toString());
    reset();
  }

  return {
    updateAgentProfile,
    isLoading,
    isSuccess,
  };
};
