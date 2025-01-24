import React from "react";
import { ArrowRight } from "lucide-react";
import {
  Box,
  Button,
  Container,
  Divider,
 
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Grid2 from '@mui/material/Grid2';

export default function Herosection() {
  const theme = useTheme();

  return (
    <Box display="flex"  alignItems="center" justifyContent="center">
      <Container>
        <Grid2 container spacing={8} alignItems="center">
          {/* Left Section */}
          <Grid2 size={ {xs:12, md:6 ,lg:6 }}display="flex" flexDirection="column">
            <Box mt={6} mb={10}>
              <Box display="flex" gap={1} alignItems="center" sx={{
              
                
              }}>
                <img
                  src="https://files.codingninjas.com/fir-professional-tag-.webp"
                  alt="star-icon"
                  style={{ height: "32px", width: "132px" }}
                />
              </Box>
              <Typography variant="h4" fontWeight="bold" mt={2}>
                Full Stack Web Development Job Bootcamp
              </Typography>
              <Typography variant="body1" mt={2}>
                Choose MERN stack or Spring Boot and acquire expertise through
                practical application and real-world projects.
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={2} mt={2}>
                {[
                  {
                    icon: "https://files.codingninjas.com/live-one-one-doubt-support-34352.svg",
                    text: "Placement assistance",
                  },
                  {
                    icon: "https://files.codingninjas.in/future-ready-curriculam-1720990542.svg",
                    text: "AI-infused curriculum",
                  },
                  {
                    icon: "https://files.codingninjas.com/placement-assistance-34353.svg",
                    text: "1:1 mentorship",
                  },
                  {
                    icon: "https://files.codingninjas.com/stanford-iit-maang-faculty-34354.svg",
                    text: "Faculty from MAANG",
                  },
                ].map((feature, index) => (
                  <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    gap={1}
                    px={2}
                    py={1}
                    borderRadius="50px"
                    bgcolor={theme.palette.grey[800]}
                  >
                    <img
                      src={feature.icon}
                      alt={feature.text}
                      style={{ height: "20px", width: "20px", color:'white' }}
                    />
                    <Typography variant="caption" fontWeight="bold">
                      {feature.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  gap: 2,
                  p: 2,
                  mt: 4,
                  borderRadius: 3,
                  backgroundColor: theme.palette.grey[900],
                }}
              >
                {[
                  { value: "95%", label: "placement rate" },
                  { value: "1200+", label: "Companies Hiring" },
                  { value: "128%", label: "Average hike" },
                  { value: "1.5 L+", label: "Learners" },
                ].map((stat, index) => (
                  <React.Fragment key={index}>
                    <Box textAlign="center">
                      <Typography variant="h6" fontWeight="bold" color="white">
                        {stat.value}
                      </Typography>
                      <Typography variant="caption" color="grey.400">
                        {stat.label}
                      </Typography>
                    </Box>
                    {index < 3 && <Divider orientation="vertical" flexItem sx={{ bgcolor: "grey.700" }} />}
                  </React.Fragment>
                ))}
              </Paper>
              <Box display="flex" alignItems="center" mt={2}>
                <Typography variant="body2" color="grey.400">
                  Know in-depth details in our free webinar
                </Typography>
                <img
                  src="https://files.codingninjas.in/hand_04-34708.webp"
                  alt="Pointing finger icon"
                  style={{ height: "32px", width: "32px", marginLeft: "8px" }}
                />
              </Box>
            </Box>
          </Grid2>

          {/* Right Section */}
          <Grid2 size ={ {xs:12, md:6 ,lg:6 }} display="flex" flexDirection="column">
            <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Book a
                <span style={{
                  background: "linear-gradient(to right, #FA00FF, #FF8A00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  {" free live webinar "}
                </span>
                to know more
              </Typography>
              <form>
                <TextField
                  label="Name"
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  margin="normal"
                />
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  margin="normal"
                />
                <TextField
                  label="Phone Number"
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img
                          src="https://files.codingninjas.com/flag-5-1732876121.webp"
                          alt="Indian Flag"
                          style={{ height: "20px", width: "20px" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  
                  sx={{ mt: 2, py: 1.5, fontWeight: "bold",color:'black' , bgcolor:'yellow' }}
                  endIcon={<ArrowRight />}
                >
                  Continue booking webinar
                </Button>
              </form>
            </Paper>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
