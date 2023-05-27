import { Route, Routes } from "react-router";
import {
  Home,
  Login,
  Signup,
  ClientProfile,
  ClientOverview,
  ClientRequestForm,
} from "./pages/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hackoverflow</h1>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/client-profile"} element={<ClientProfile />} />
        <Route path={"/client-overview"} element={<ClientOverview />} />
        <Route path={"/client-request"} element={<ClientRequestForm />} />
      </Routes>
    </div>
  );
}

export default App;
