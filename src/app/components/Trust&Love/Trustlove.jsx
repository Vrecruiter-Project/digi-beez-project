import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Container,
  Avatar,
  Button,
} from "@mui/material";



const testimonials = [
  {
    name: "Samir Sayyed",
    title: "Product Engineer",
    description:
      "As I wanted to switch my career from Mechanical to IT, I joined bootcamp. My goal was to learn full stack development and get placed in a good company with a good package. After completing this bootcamp you will be capable of cracking any interview and ready to work.",
    post: "Coding Ninjas",
    companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Phenom_People_logo.svg/320px-Phenom_People_logo.svg.png",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    bgColor: "#4A90E2",
  },

  {
    name: "Manikanta Sura",
    title: "Application Management Analyst",
    description:
      "I was inspired by the way things were explained during the 1st session which boosted my confidence. My goal was to have good technical knowledge to transform my career. It was overall a very good support and helped me to gain a new job.",
    post: "Coding Ninjas",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/AXA_Logo.svg/320px-AXA_Logo.svg.png",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    bgColor: "#E91E63",
  },

  {
    name: "Rashid Khan",
    title: "Senior Software Engineer",
    description:
      "Before joining the bootcamp I was trying to learn development on my own but I was always hitting a dead end. CN helped me figure out what exactly I needed to learn to be a good developer and get a job. The program was very well organised. It motivated me to be consistent and study.",
    post: "Coding Ninjas",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/320px-Oracle_logo.svg.png",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    bgColor: "#FFC107",
  },

];

const Testimonials = () => {
  return (
    <Container>
      <Box >

        {/* Section Title */}
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}
        >
          Voices of trust & love
        </Typography>

        {/* Filter Buttons */}
        {/* <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "white",
            color: "black",
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Non-tech to tech
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#333",
            color: "white",
            textTransform: "none",
          }}
        >
          Service to product
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#333",
            color: "white",
            textTransform: "none",
          }}
        >
          Landed the first job
        </Button>
      </Box> */}

        {/* Testimonials */}
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} >
              <Card
                sx={{
                  bgcolor: "#1E1E1E",
                  color: "white",
                  p: 2,
                  borderRadius: "16px",
                  textAlign: "center",
                  position: "relative", overflow: "visible"

                }}
              >
                <Avatar
                  src={testimonial.avatar}
                  sx={{
                    width: 64,
                    height: 64,
                    mx: "auto",
                    mt: -4,
                    position: 'absolute',
                    top: '10px',

                    left: '38%'

                  }}
                />
                <Typography variant="h6" sx={{ mt: 6 }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
                  {testimonial.title}
                </Typography>
                <CardContent>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {testimonial.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "gray", fontSize: 14, mb: 2 }}
                  >
                    Post - {testimonial.post}
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={testimonial.companyLogo}
                      alt={testimonial.post}
                      style={{ width: 50, height: "auto" }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 6 }}>
          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "white", textTransform: "none" }}
          >
            Read all success stories
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FF7043",
              color: "white",
              textTransform: "none",
            }}
          >
            Book a free webinar
          </Button>
        </Box>

      </Box></Container>
  );
};

export default Testimonials;