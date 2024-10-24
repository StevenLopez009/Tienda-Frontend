import { useContext, createContext, useState, useEffect } from "react";
import { AccessTokenResponse, AuthResponse, User } from "../types/types";
import { json } from "react-router-dom";
import { API_URL } from "./constants";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({
  isAuthenticated: false,
  getAccessToken: () => {},
  saveUser: (userData: AuthResponse) => {},
  getRefreshToken: () => {},
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState<string>("");
  const [user, setUser] = useState<User>();
  //const [refreshToken, setRefreshToken] = useState<string>("");

  useEffect(() => {}, []);

  async function requestNewAccessToken(refreshToken: string) {
    try {
      const response = await fetch(`${API_URL}/refresh-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${refreshToken}`,
        },
      });
      if (response.ok) {
        const json = (await response.json()) as AccessTokenResponse;
        if (json.error) {
          throw new Error(json.error);
        }
        return json.body.accessToken;
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function getUserInfo(accessToken: string) {
    try {
      const response = await fetch(`${API_URL}/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.ok) {
        const json = await response.json();
        if (json.error) {
          throw new Error(json.error);
        }
        return json;
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function checkAuth() {
    if (accessToken) {
    } else {
      const token = getRefreshToken();
      if (token) {
        const newAccessToken = await requestNewAccessToken(token);
        if (newAccessToken) {
          const userInfo = await getUserInfo(newAccessToken);
          if (userInfo) {
            setAccessToken(newAccessToken);
            //setRefreshToken(userData.body.refreshToken);
            localStorage.setItem("token", JSON.stringify(token));
            setIsAuthenticated(true);
            setUser(userInfo);
          }
        }
      }
    }
  }

  function getAccessToken() {
    return accessToken;
  }

  function getRefreshToken() {
    const token = localStorage.getItem("token");
    if (token) {
      const { refreshToken } = JSON.parse(token);
      return refreshToken;
    }
  }

  function saveUser(userData: AuthResponse) {
    setAccessToken(userData.body.accessToken);
    //setRefreshToken(userData.body.refreshToken);
    setUser(userData.body.user);
    localStorage.setItem("token", JSON.stringify(userData.body.refreshToken));
    setIsAuthenticated(true);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, getAccessToken, saveUser, getRefreshToken }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
