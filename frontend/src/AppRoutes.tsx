import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/layout";
import AuthCallbackPage from "./pages/AuthCallBackPage";
import CreateNewProfile from "./pages/CreateNewProfile";
import About from "./pages/About";
import Pricing from "./pages/Pricing";

const AppRoutes = () => {
  return (
    <Routes>
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
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route path="/create-profile" element={<CreateNewProfile />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
