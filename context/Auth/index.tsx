import React, { createContext, useEffect, useState } from "react";
import { apiAuth } from "../../service/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextData {
  signed: boolean;
  error: boolean;
  user: object | null;
  Login(data: any): Promise<void>;
  Logout(): void;
}

interface LoginData {
  user: string;
  password: string;
}

interface ApiResponse {
  user: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<object | null>(null);
  const [error, setError] = useState(false);

  async function Login(data: LoginData): Promise<void> {
    await apiAuth
      .post<ApiResponse>("/signIn", {
        user: data.user,
        password: data.password,
      })
      .then((response) => {
        AsyncStorage.setItem("@App:user", JSON.stringify(response.data.user));
        setUser(response.data.user);
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }

  const getData = async () => {
    const value = await AsyncStorage.getItem("@App:user");
    if (value !== null) {
      setUser(JSON.parse(value));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  async function Logout() {
    setUser(null);
    await AsyncStorage.removeItem("@App:user");
  }

  return (
    <AuthContext.Provider
      value={{
        signed: Boolean(user),
        error,
        user,
        Login,
        Logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
