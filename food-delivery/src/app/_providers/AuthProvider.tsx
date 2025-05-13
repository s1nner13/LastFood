"use client";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type User = {
  _id: string;
  name: string;
  email: string;
  image: string;
  role: string;
};
type AuthContextType = {
  user?: User;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  setUser: (user?: User) => void;
};
const AuthContext = createContext({} as AuthContextType);
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await axios.post("http://localhost:3001/auth/sign-in", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      setUser(data.user);
      router.push("/");
      return data.user;
    } catch {
      toast.error("Failed to log in");
      return undefined;
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const { data } = await axios.post("http://localhost:3001/auth/sign-up", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      setUser(data.user);
    } catch (error) {
      console.error(error);
      toast.error("Failed to sign up");
    }
  };

  const signOut = async () => {
    localStorage.removeItem("token");
    setUser(undefined);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token);

    if (!token) return;
    console.log("test1");

    const getUser = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get("http://localhost:3001/auth/refresh", {
          headers: {
            Authorization: `${token}`,
          },
        });
        setUser(data);
        console.log(data);
      } catch (error) {
        console.log(error);

        localStorage.removeItem("token");
        setUser(undefined);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, signUp, setUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
