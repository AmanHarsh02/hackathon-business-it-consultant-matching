import { Route, Routes } from "react-router";
import {
  Home,
  ClientProfile,
  ClientOverview,
  ClientRequestForm,
  Auth,
} from "./pages/index";

import { ProtectedRoute } from "./Components/index";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/auth"} element={<Auth />} />

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
      </Routes>
    </div>
  );
}

export default App;
