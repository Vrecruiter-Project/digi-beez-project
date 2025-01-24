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
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';

export default function Herosection() {
  const theme = useTheme();

  return (
    <Box display="flex" alignItems="center" justifyContent="center" mt={{ xs: 0, md: 6, lg: 2 }}>
      <Container>
        <Grid2 container spacing={{ xs: 2, md: 6, lg: 10 }} alignItems="center">
          {/* Left Section */}
          <Grid2 size={{ xs: 12, md: 6, lg: 6 }} display="flex" flexDirection="column">
            <Box
              mt={6}
              mb={10}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: '3px', sm: '3px', md: '10px', lg: '18px' }  
              }}
            >
              <Typography variant="h4" fontWeight="bold" mt={2}>
                Full Stack Web Development Job Bootcamp
              </Typography>
              <Typography variant="body1" mt={2}>
                Choose MERN stack or Spring Boot and acquire expertise through
                practical application and real-world projects.
              </Typography>
              <Box display="flex" flexWrap="wrap" justify-content='center' gap={2} mt={2}>
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
                      style={{ height: "20px", width: "20px" }}
                    />
                    <Typography variant="caption" fontWeight="bold" sx={{
                      color: 'white'
                    }} >
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
                  flexWrap: 'wrap',
                  gap: 2,
                  p: 2,
                  mt: 4,
                  borderRadius: 3,
                  backgroundColor: theme.palette.grey[900],
                }}
              >
                {[
                  { value: "100%", label: "placement rate" },
                  { value: "500+", label: "Companies Hiring" },
                  { value: "50%", label: "Average hike" },
                  { value: "1.5 k+", label: "Learners" },
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
                <Typography variant="body2" >
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
          <Grid2 size={{ xs: 12, md: 6, lg: 6 }} display="flex" flexDirection="column"  justifyContent={{xs:'center',md:'center',lg:'flex-start'}}>
            <Paper elevation={3} sx={{
              p: 4,
              //  maxWidth: '28rem'
              borderRadius: 5,
            }}>
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
                <FormControl>
                  <Typography sx={{ fontSize: '14px' }}>
                    Experience <span style={{ color: "red" }}>*</span>
                  </Typography>


                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Working professional - Technical roles"
                    name="radio-buttons-group"
                  >
                    {[
                      "Working professional - Technical roles",
                      "Working professional - Non technical",
                      "College student - Final year",
                      "College student - 1st to pre-final year",
                      "Others",
                    ].map((option, index) => (
                      <FormControlLabel
                        key={index}
                        value={option}
                        control={<Radio />}
                        label={
                          <Typography sx={{ fontSize: { xs: "0.8rem", sm: "0.85rem", lg: "0.9rem" }, fontWeight: "medium" }}>
                            {option}
                          </Typography>
                        }
                      />
                    ))}
                  </RadioGroup>
                </FormControl>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"

                  sx={{ mt: 2, py: 1.5, fontWeight: "bold", color: 'black', bgcolor: 'yellow' }}
                  endIcon={<ArrowRight />}
                >
                  Continue booking webinar
                </Button>
              </form>
            </Paper>
          </Grid2>
        </Grid2>
      </Container>
    </Box >
  );
}
