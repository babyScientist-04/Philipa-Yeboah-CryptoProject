import {  Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import AssetDetail from "./pages/AssetDetail";

const WithNav = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

function App() {
  return (
    
      <AuthProvider>   
        <Routes>
          <Route path="/" element={<WithNav><Home /></WithNav>} />
          <Route path="/explore" element={<WithNav><Explore /></WithNav>} />
          <Route path="/asset/:id" element={<WithNav><AssetDetail /></WithNav>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <WithNav><Profile /></WithNav>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    
  );
}

export default App;