import { Box, Button, Typography, Grid } from "@mui/material";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { Link, useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/signup");
  };
  return (
    <>
      <Box sx={{ padding: "20px", height: "100vh" }}>
        <Box sx={{ height: "70%" }}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <img
                src={img3}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "90px",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={img2}
                  alt=""
                  style={{
                    width: "100%",
                    height: "48%",
                    objectFit: "cover",
                    borderRadius: "90px",
                  }}
                />
                <img
                  src={img1}
                  alt=""
                  style={{
                    width: "100%",
                    height: "48%",
                    objectFit: "cover",
                    borderRadius: "100px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 2,
          }}
        >
          <Typography sx={{ fontSize: "1.5rem", textAlign: "center" }}>
            The Fashion App That Makes You Look Your Best
          </Typography>
          <Typography sx={{ textAlign: "center", mt: 1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            beatae sed adipisci et
          </Typography>
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
            onClick={handleButtonClick}
          >
            Let's Get Started
          </Button>
          <Typography sx={{ textAlign: "center", mt: 1 }}>
            Already have an account? <Link to={"/login"}>Sign In</Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Splash;
