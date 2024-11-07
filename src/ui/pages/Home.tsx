import { Box, TextField, Typography } from "@mui/material";
import Carousel from "../components/Carousel";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

function Home() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ margin: "0 auto", width: "90%" }}>
        <Box
          sx={{
            height: "20vh",
          }}
        >
          <Typography>Location</Typography>
          <Box sx={{ display: "flex" }}>
            <FmdGoodIcon sx={{ color: "#6e4a33" }} />
            <Typography>Bogota, Colombia</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "15px 0",
            }}
          >
            <TextField
              variant="outlined"
              type="search"
              placeholder="Search..."
              sx={{
                width: "85%",
                backgroundColor: "#fff",
                "& input": {
                  padding: "6px 12px",
                  fontSize: "14px",
                },
                "& .MuiOutlinedInput-root": {
                  height: "50px",
                },
              }}
            />
            <Box
              sx={{
                height: "50px",
                width: "50px",
                backgroundColor: "#6e4a33",
                borderRadius: "10px",
              }}
            ></Box>
          </Box>
        </Box>
        <Carousel />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            margin: "20px 0",
          }}
        >
          <Box>
            <Box
              sx={{
                backgroundColor: "pink",
                borderRadius: "50px",
                width: "60px",
                height: "60px",
              }}
            ></Box>
            <Typography sx={{ textAlign: "center", fontSize: "0.8rem" }}>
              SHIRT
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                backgroundColor: "pink",
                borderRadius: "50px",
                width: "60px",
                height: "60px",
              }}
            ></Box>
            <Typography sx={{ textAlign: "center", fontSize: "0.8rem" }}>
              PANT
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                backgroundColor: "pink",
                borderRadius: "50px",
                width: "60px",
                height: "60px",
              }}
            ></Box>
            <Typography sx={{ textAlign: "center", fontSize: "0.8rem" }}>
              DRESS
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                backgroundColor: "pink",
                borderRadius: "50px",
                width: "60px",
                height: "60px",
              }}
            ></Box>
            <Typography sx={{ textAlign: "center", fontSize: "0.8rem" }}>
              JACKET
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
