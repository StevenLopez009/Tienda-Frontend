import { Link } from "react-router-dom";
import { Button, colors, Container, Grid } from "@mui/material";
import "./Splash.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

function Splash() {
  return (
    <>
      <div className="splash__container">
        <Container>
          <Grid container spacing={2}>
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
            <Grid item xs={6} container direction="column" spacing={2}>
              <Grid item>
                <img
                  src={img2}
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "90px",
                  }}
                />
              </Grid>
              <Grid item>
                <img
                  src={img1}
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "100px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <div style={{ width: "90%", margin: "0 auto", textAlign: "center" }}>
          <h2 className="splash__title">
            The Fashion App That <br /> Makes You Look Your Best
          </h2>
          <p className="splash__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            distinctio aliquid expedita, natus numquam nostrum corrupti
            explicabo, quam quae
          </p>
          <Button
            variant="contained"
            style={{
              width: "100%",
              backgroundColor: "#7f5539",
              borderRadius: "20px",
            }}
          >
            <Link
              to="/signup"
              className="splash__link splash__link--primary"
              style={{ textDecoration: "none" }}
            >
              Let's Get Started
            </Link>
          </Button>
          <p className="splash__text">
            Already have an account?
            <Link to="/login" className="splash__link splash__link--secondary">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Splash;
