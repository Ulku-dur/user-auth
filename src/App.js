import React from "react";
import "./App.css";
import { useAuth } from "./AuthContext";
import PrivatePage from "./PrivatePage";
import LoginPage from "./LoginPage";

const App = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div>
      <h1>Hello</h1>
      <div className="App">
        {isAuthenticated() ? <PrivatePage /> : <LoginPage />}
      </div>
    </div>
  );
};

export default App;
