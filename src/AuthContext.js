import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isAuthenticated = () => {
    return user !== null;
  };

  const login = () => {
    if(username == "ülkü")
    setUser(username);
  };

  const logout = () => {
    setUser(null);
    setUsername("");
    setPassword("");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        login,
        logout,
        username,
        password,
        setUsername,
        setPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
