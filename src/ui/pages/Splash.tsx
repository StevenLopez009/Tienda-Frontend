import { Link } from "react-router-dom";
import { Button, Container, Grid } from "@mui/material";
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
      </div>
    </>
  );
}

export default Splash;
