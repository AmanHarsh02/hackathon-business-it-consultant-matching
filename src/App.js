import { Route, Routes } from "react-router";
import {
  Home,
  ClientProfile,
  ClientOverview,
  ClientRequestForm,
  Auth,
} from "./pages/index";

import { ProtectedRoute } from "./Components/index";
import { Chat } from "./Components/chat/Chat";
import { NavBar } from "./Components/navbar/NavBar";

import "./App.css";
import ClientShortListed from "./pages/ClientDashboard/ClientShortListed/ClientShortListed";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/auth"} element={<Auth />} />
        <Route path={"/chat"} element={<Chat />} />

        <Route
          path={"/client-profile"}
          element={
            <ProtectedRoute>
              <ClientProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path={"/client-overview"}
          element={
            // <ProtectedRoute>
            <ClientOverview />
            // </ProtectedRoute>
          }
        />
        <Route
          path={"/client-request"}
          element={
            // <ProtectedRoute>
              
              <ClientRequestForm />
            // </ProtectedRoute>
          }
        />
        <Route
          path={"/client-shortlist"}
          element={
            // <ProtectedRoute>
              
              <ClientShortListed />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
