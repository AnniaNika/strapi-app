import Cookies from "js-cookie";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  user: {
    id: null,
    userame: null,
    email: null,
  },
});

export const AuthContextProvider = ({ children }) => {
  const { t, i18n } = useTranslation();
  const axios = require("axios").default;
  // const navigate = useNavigate();
  // const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogout = useCallback(() => {
    //* Remove cookies
    // console.log("Logout");
    const cookieJwt = Cookies.get("jwt");
    // console.log("JWT -->", cookieJwt);
    if (cookieJwt) {
      Cookies.remove("jwt");
      setIsLoggedIn(false);
    }
  }, []);

  const checkLoginStatus = useCallback(async () => {
    const cookieJwt = Cookies.get("jwt");
    // console.log("JWT -->", cookieJwt);
    if (cookieJwt && cookieJwt !== undefined) {
      axios
        .get("https://eventure.thinkplus.dev/api/users/me", {
          headers: {
            Authorization: `Bearer ${cookieJwt}`,
          },
        })
        .then((r) => {
          // console.log(true, r);
          setIsLoggedIn(true);
        })
        .catch((r) => {
          console.log(false, r);
        });
    }
  }, []);

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  // useEffect(() => {
  //   console.log("Context isLoggedIn -->", isLoggedIn);
  // }, [isLoggedIn]);

  //* Check if cookies expire on their own. If not, check it manually
  // useEffect(() => {
  //   const authInterval = setInterval(() => {
  //     const expireTime = window.localStorage.getItem(STORAGE_VARS.auth_expires);

  //     if (expireTime && Date.now() > Number(expireTime)) checkLoginStatus();
  //   }, 60 * 1000);

  //   return () => clearInterval(authInterval);
  // }, [checkLoginStatus]);

  const value = useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
      user,
      checkLoginStatus,
      handleLogout,
    }),
    [isLoggedIn, setIsLoggedIn, user, checkLoginStatus, handleLogout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within AuthContextProvider");
  }

  return context;
};

export default AuthContext;
