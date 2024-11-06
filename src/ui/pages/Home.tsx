import { useAuth } from "../../auth/AuthProvider";

function Home() {
  const auth = useAuth();
  return <h1>Home de {auth.getUser()?.name || ""}</h1>;
}

export default Home;
