import React, { useState } from "react";
const AuthContext = React.createContext({
  token: "",
  email: "",
  isLoggedIn: false,
  login: (token, email) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  let initialToken = localStorage.getItem("token");
  const initialTime = localStorage.getItem("time");
  const currentTime = new Date().getTime();
  if (currentTime > initialTime) {
    initialToken = null;
    localStorage.clear();
  }

  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState("");
  const userIsLoggedIn = !!token;

  const loginHandler = (token, email) => {
    const now = new Date().getTime() + 300000;
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("time", now);
    setEmail(email);
    localStorage.setItem("email", email);
    // window.location.reload();
  };

  const logoutHandler = () => {
    localStorage.clear();
    setToken(null);
    localStorage.removeItem("token");
    // window.location.reload();
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    email: email,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
