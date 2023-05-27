import { createContext, useContext, useReducer, useState } from "react";

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_TEST_USER":
      return { state: action.payload };
    default:
      return { ...state };
  }
};

const authInitialState = {
  email: "",
  password: "",
};

export function AuthProvider({ children }) {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(authState);

  const loginHandler = () => {
    if (
      authState.email.trim().length === 0 ||
      authState.password.trim().length === 0
    ) {
      console.error("Email or Password cannot be empty");
    } else {
      setIsLoggedIn(true);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        email: authState.email,
        password: authState.password,
        isLoggedIn,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
