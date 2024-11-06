import { useState } from "react";
import { useAuth } from "../../auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { API_URL } from "../../auth/constants";
import { Box, Typography, TextField, Button } from "@mui/material";

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
        setErrorResponse("");
        goTo("/login");
      } else {
        const json = await response.json();
        setErrorResponse(json.error || "An error occurred");
      }
    } catch (error) {
      setErrorResponse("An error occurred while connecting to the server.");
    }
  }

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "60%", md: "40%" },
          padding: "2rem",
          margin: "0 auto",
          height: "70vh",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" align="center" margin="1.5rem 0">
            Create Account
          </Typography>
          <Typography align="center" sx={{ mb: 2 }}>
            Fill in your information below or register with your social account
          </Typography>
          {errorResponse && (
            <Typography color="error" align="center" sx={{ mb: 2 }}>
              {errorResponse}
            </Typography>
          )}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              InputLabelProps={{
                shrink: true,
                sx: {
                  position: "relative",
                  left: 0,
                  top: 0,
                  transform: "none",
                  color: "black",
                },
              }}
              InputProps={{
                sx: {
                  borderRadius: "40px",
                },
              }}
            />
            <TextField
              label="Username"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              InputLabelProps={{
                shrink: true,
                sx: {
                  position: "relative",
                  left: 0,
                  top: 0,
                  transform: "none",
                  color: "black",
                },
              }}
              InputProps={{
                sx: {
                  borderRadius: "40px",
                },
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
                sx: {
                  position: "relative",
                  left: 0,
                  top: 0,
                  transform: "none",
                  color: "black",
                },
              }}
              InputProps={{
                sx: {
                  borderRadius: "40px",
                },
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
              Create Account
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
