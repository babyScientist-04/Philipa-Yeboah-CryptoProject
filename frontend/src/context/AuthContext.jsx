/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, useEffect } from "react";
import { fetchProfile, loginUser, logoutUser, registerUser } from "../api/api.js";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading]= useState(false);

  
  useEffect(() => {
    const restoreSession = async () => {
      try {
        const res = await fetchProfile();
        setUser(res.data.user);
      } catch {
        setUser(null); 
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  const register = async ({ name, email, password }) => {
    const res = await registerUser({ name, email, password });
    setUser(res.data.user);
    return res;
  };

  const login = async ({ email, password }) => {
    const res = await loginUser({ email, password });
    setUser(res.data.user);
    return res;
  };

  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export  const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
};