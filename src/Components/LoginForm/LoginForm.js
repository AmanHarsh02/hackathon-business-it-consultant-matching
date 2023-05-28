import "../LoginForm/LoginForm.css";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const navigate=useNavigate();
  return (
    <div id="login">
      <h1>Welcome Back!</h1>

      <form action="/" method="post">
        <input
          type="email"
          required
          autoComplete="off"
          placeholder="Email Address"
        />

        <input
          type="password"
          required
          autoComplete="off"
          placeholder="Password"
        />

        <p className="forgot">
          <a href="#">Forgot Password?</a>
        </p>

        <button className="button button-block" onClick={()=>navigate("/client-request")}>Log In</button>
      </form>
    </div>
  );
};
