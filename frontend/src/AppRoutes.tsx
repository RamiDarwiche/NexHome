import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/layout";
import AuthCallbackPage from "./pages/AuthCallBackPage";
import CreateNewAgentProfile from "./pages/CreateNewAgentProfile";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import AgentProfile from "./pages/agent-pages/AgentProfile";
import AgentLanding from "./pages/agent-pages/AgentLanding";
import AgentCalendar from "./pages/agent-pages/AgentCalendar";
import AgentInbox from "./pages/agent-pages/AgentInbox";
import AgentAddClient from "./pages/agent-pages/AgentAddClient";
import AgentClients from "./pages/agent-pages/AgentClients";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Global routing */}
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/pricing"
        element={
          <Layout>
            <Pricing />
          </Layout>
        }
      />
      <Route
        path="/agent-profile"
        element={
          <Layout>
            <AgentProfile />
          </Layout>
        }
      />
      {/* Agent routing */}
      <Route
        path="/agent/dashboard"
        element={
          <Layout>
            <AgentLanding />
          </Layout>
        }
      />
      <Route
        path="/agent/inbox"
        element={
          <Layout>
            <AgentInbox />
          </Layout>
        }
      />
      <Route
        path="/agent/clients"
        element={
          <Layout>
            <AgentClients />
          </Layout>
        }
      />
      <Route
        path="/agent/calendar"
        element={
          <Layout>
            <AgentCalendar />
          </Layout>
        }
      />
      <Route
        path="/agent/add-client"
        element={
          <Layout>
            <AgentAddClient />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route path="/create-profile" element={<CreateNewAgentProfile />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
