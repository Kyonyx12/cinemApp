import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context/authContext";

const LoggedIn = () => {
  const { authUser, loading } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [authUser, loading, router]);

  return <h1>Hola mundo estas logeado.</h1>;
};

export default LoggedIn;
