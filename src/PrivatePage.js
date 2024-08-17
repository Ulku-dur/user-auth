import React from "react";
import { useAuth } from "./AuthContext";

const PrivatePage = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Welcome Page</h2>
      <h2>Hello {user}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default PrivatePage;
