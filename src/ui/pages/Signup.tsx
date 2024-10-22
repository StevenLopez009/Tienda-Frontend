import { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { API_URL } from "../../auth/constants";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  const auth = useAuth();
  const goTo = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          password,
        }),
      });

      if (response.ok) {
        console.log("User created successfully");
        setErrorResponse("");
        goTo("/login");
      } else {
        console.log("Something went wrong");
        try {
          const json = await response.json();
          setErrorResponse(json.error || "An error occurred");
        } catch (err) {
          console.error("Failed to parse response:", err);
          setErrorResponse("An error occurred while processing your request.");
        }
      }
    } catch (error) {
      console.log("Fetch error:", error);
      setErrorResponse("An error occurred while connecting to the server.");
    }
  }

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {errorResponse && <p>{errorResponse}</p>}
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
        <button type="submit">Crear Cuenta</button>
      </form>
    </div>
  );
};

export default SignUp;
