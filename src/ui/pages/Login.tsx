import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import { API_URL } from "../../auth/constants";
import { AuthResponse, AuthResponseError } from "../../types/types";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  const auth = useAuth();
  const goTo = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        console.log("Login successfully");
        setErrorResponse("");

        const json = (await response.json()) as AuthResponse;

        if (json.body.accessToken && json.body.refreshToken) {
          auth.saveUser(json);
          goTo("/dashboard");
        }
      } else {
        console.log("Something went wrong");
        const json = (await response.json()) as AuthResponseError;
        setErrorResponse(json.body.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "60%", md: "40%" },
          padding: "2rem",
          height: "100vh",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" align="center" margin="2rem 0">
            Sign In
          </Typography>
          <Typography align="center" sx={{ mb: 2 }}>
            Hi welcome back, you've been missed
          </Typography>
          {errorResponse && (
            <Typography color="error" align="center" sx={{ mb: 2 }}>
              {errorResponse}
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              marginTop: "4rem",
            }}
          >
            <TextField
              label="Username"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              InputLabelProps={{
                shrink: true,
                sx: { color: "black", fontSize: "1.4rem" },
              }}
              InputProps={{
                sx: { borderRadius: "40px" },
              }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputLabelProps={{
                shrink: true,
                sx: { color: "black", fontSize: "1.4rem" },
              }}
              InputProps={{
                sx: { borderRadius: "40px" },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                py: 1.5,
                backgroundColor: "#7f5539",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#6e4a33",
                },
              }}
            >
              Sign In
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
