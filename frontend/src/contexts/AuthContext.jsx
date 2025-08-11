import { createContext, useContext, useReducer, useEffect } from "react";
import { authAPI } from "../services/api";
import { toast } from "react-toastify";

// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

// Action types
const AUTH_ACTIONS = {
  AUTH_START: "AUTH_START",
  AUTH_SUCCESS: "AUTH_SUCCESS",
  AUTH_FAILURE: "AUTH_FAILURE",
  LOGOUT: "LOGOUT",
  CLEAR_ERROR: "CLEAR_ERROR",
  SET_LOADING: "SET_LOADING",
};

// Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.AUTH_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case AUTH_ACTIONS.AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };

    case AUTH_ACTIONS.AUTH_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };

    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };

    case AUTH_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

// Create context
const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check if user is already logged in on app start
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Check authentication status
  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const user = localStorage.getItem("user");

      if (token && user) {
        // Verify token with server
        const response = await authAPI.getProfile();

        dispatch({
          type: AUTH_ACTIONS.AUTH_SUCCESS,
          payload: { user: response.user },
        });
      } else {
        dispatch({
          type: AUTH_ACTIONS.SET_LOADING,
          payload: false,
        });
      }
    } catch (error) {
      // Token might be expired or invalid
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");

      dispatch({
        type: AUTH_ACTIONS.SET_LOADING,
        payload: false,
      });
    }
  };

  // Sign up function
  const signup = async (userData) => {
    try {
      dispatch({ type: AUTH_ACTIONS.AUTH_START });

      const response = await authAPI.signup(userData);

      // Store tokens and user data
      localStorage.setItem("accessToken", response.tokens.accessToken);
      localStorage.setItem("refreshToken", response.tokens.refreshToken);
      localStorage.setItem("user", JSON.stringify(response.user));

      dispatch({
        type: AUTH_ACTIONS.AUTH_SUCCESS,
        payload: { user: response.user },
      });

      toast.success(response.message || "Account created successfully!");
      return { success: true, data: response };
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "Signup failed";

      dispatch({
        type: AUTH_ACTIONS.AUTH_FAILURE,
        payload: errorMessage,
      });

      return { success: false, error: errorMessage };
    }
  };

  // Sign in function
  const signin = async (credentials) => {
    try {
      dispatch({ type: AUTH_ACTIONS.AUTH_START });

      const response = await authAPI.signin(credentials);

      // Store tokens and user data
      localStorage.setItem("accessToken", response.tokens.accessToken);
      localStorage.setItem("refreshToken", response.tokens.refreshToken);
      localStorage.setItem("user", JSON.stringify(response.user));

      dispatch({
        type: AUTH_ACTIONS.AUTH_SUCCESS,
        payload: { user: response.user },
      });

      toast.success(response.message || "Signed in successfully!");
      return { success: true, data: response };
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "Signin failed";

      dispatch({
        type: AUTH_ACTIONS.AUTH_FAILURE,
        payload: errorMessage,
      });

      return { success: false, error: errorMessage };
    }
  };

  // Sign out function
  const signout = async () => {
    try {
      // Clear local storage
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");

      dispatch({ type: AUTH_ACTIONS.LOGOUT });
      toast.success("Signed out successfully!");
    } catch (error) {
      console.error("Signout API error:", error);
    }
  };

  // Update profile function
  const updateProfile = async (profileData) => {
    try {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });

      const response = await authAPI.updateProfile(profileData);

      // Update local storage
      localStorage.setItem("user", JSON.stringify(response.user));

      dispatch({
        type: AUTH_ACTIONS.AUTH_SUCCESS,
        payload: { user: response.user },
      });

      toast.success(response.message || "Profile updated successfully!");
      return { success: true, data: response };
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || error.message || "Profile update failed";

      dispatch({
        type: AUTH_ACTIONS.AUTH_FAILURE,
        payload: errorMessage,
      });

      return { success: false, error: errorMessage };
    }
  };

  // Clear error function
  const clearError = () => {
    dispatch({ type: AUTH_ACTIONS.CLEAR_ERROR });
  };

  const value = {
    ...state,
    signup,
    signin,
    signout,
    updateProfile,
    clearError,
    checkAuthStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
