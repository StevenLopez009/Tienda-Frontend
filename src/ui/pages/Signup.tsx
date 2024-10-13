import { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
