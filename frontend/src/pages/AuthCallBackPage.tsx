import { useCreateMyAgent } from "@/api/MyAgentApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const { user } = useAuth0();
  const { createAgent } = useCreateMyAgent();
  const navigate = useNavigate();

  const hasCreatedAgent = useRef(false);

  useEffect(() => {
    console.log(hasCreatedAgent.current);
    if (user?.sub && user?.email && !hasCreatedAgent.current) {
      createAgent({ auth0Id: user.sub, email: user.email });
      hasCreatedAgent.current = true;
    }
    // profile creation redirect is handled on homepage
    navigate("/");
  }, [createAgent, navigate, user]);

  return <>Loading...</>;
};

export default AuthCallbackPage;
