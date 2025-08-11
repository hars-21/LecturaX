import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/layouts/home";
import DashboardLayout from "./components/layouts/dashboard";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Reset from "./pages/reset";
import Home from "./pages/home";
import NoPage from "./pages/nopage";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import About from "./pages/about";
import Support from "./pages/support";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Auth Context and Protected Routes
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute, PublicRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />
            <Route
              path="/about"
              element={
                <PublicRoute>
                  <About />
                </PublicRoute>
              }
            />
            <Route
              path="/support"
              element={
                <PublicRoute>
                  <Support />
                </PublicRoute>
              }
            />
            <Route
              path="/privacy"
              element={
                <PublicRoute>
                  <Privacy />
                </PublicRoute>
              }
            />
            <Route
              path="/terms"
              element={
                <PublicRoute>
                  <Terms />
                </PublicRoute>
              }
            />
            <Route
              path="/signin"
              element={
                <ProtectedRoute requireAuth={false} redirectTo="/dashboard">
                  <Signin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <ProtectedRoute requireAuth={false} redirectTo="/dashboard">
                  <Signup />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reset"
              element={
                <ProtectedRoute requireAuth={false} redirectTo="/dashboard">
                  <Reset />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
