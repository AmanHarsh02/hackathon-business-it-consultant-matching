import "../Auth/Auth.css";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { LoginForm, SignupForm } from "../../Components/index";

const testUser = {
  email: "testuser@gmail.com",
  password: "testuser",
};

export const Auth = () => {
  const [activeTab, setActiveTab] = useState("signup");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="form">
      <ul className="tab-group">
        <li className={`tab ${activeTab === "signup" ? "active" : ""}`}>
          <a onClick={() => handleTabClick("signup")}>Sign Up</a>
        </li>
        <li className={`tab ${activeTab === "login" ? "active" : ""}`}>
          <a onClick={() => handleTabClick("login")}>Log In</a>
        </li>
      </ul>

      <div className="tab-content">
        {activeTab === "signup" ? <SignupForm /> : <LoginForm />}
      </div>
    </div>
  );
};
