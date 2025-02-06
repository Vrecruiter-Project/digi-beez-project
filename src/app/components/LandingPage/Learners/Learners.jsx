import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";


const instructors = [
  {
    name: "Sandhiya Rani",
    role: "Instructor",
    image: "https://img.freepik.com/free-photo/portrait-happy-woman-with-digital-tablet_329181-11681.jpg",
    companiesimg: ["https://files.codingninjas.com/app-amazon-1705661953.webp", "https://files.codingninjas.com/app-facebook-1-1705661953.webp"],

    teaches: ["Blocks of Photoshop with Graphic", "Graphic Designer & Web Designer"],
    linkedIn: "",
    companies: ["amazon", "facebook", "scaler"],
  },
  {
    name: "Arun Prabhu",
    role: "Instructor",
    companiesimg: ["https://files.codingninjas.com/app-amazon-1705661953.webp", "https://files.codingninjas.com/app-facebook-1-1705661953.webp", "https://files.codingninjas.com/app-google-1705661953.webp"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qxXYnYxhHYEXP8xrucC7QApbbI4qi4ralw&s",
    teaches: ["Blocks of React with MUI", "Web Developer & Web Designer"],
    linkedIn: "",
    companies: ["IIIT"],
  },
  {
    name: "Ratan Kumar Das",
    role: "Instructor",
    companiesimg: ["https://files.codingninjas.com/app-facebook-1-1705661953.webp", "https://files.codingninjas.com/app-google-1705661953.webp"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlTkdul0wXCUuZ2YgMWlYUVkFti6rRCB2XMw&s",
    teaches: ["Blocks in React", "Web Developer", "Basics of Backend"],
    linkedIn: "",
    companies: ["Google", "IIIT"],
    
  },
];

const Learners = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", my: 9 }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontSize: { xs: "1.7rem", md: "2rem" }, fontWeight: "bold", mb: 4, mt: 5 }} > Faculty that brings out the best in you </Typography>

        <Grid container spacing={3} justifyContent="center">
          {instructors.map((instructor, index) => (
            <Grid  key={index} size ={{xs:12, sm:6, md:4}}>
              <Card sx={{ height: 400, mx: "auto", p: 2, textAlign: "center", boxShadow: 3, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 80, height: 80, borderRadius: "50%", mx: "auto", my: 2, objectFit: "cover" }}
                  image={instructor.image}
                  alt={instructor.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {instructor.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {instructor.role}
                  </Typography>

                  <Grid container spacing={1} sx={{ justifyContent: "center" , my: 1}}>
                    {instructor.companiesimg.map((subject, i) => (
                      <Grid key={i}>
                        <img src={subject} alt={subject} style={{ width: 20, height: 20 }} />
                      </Grid>
                    ))}
                  </Grid>



                  <Typography variant="body2" sx={{ my: 1 }}>
                    <strong>Teaches</strong>
                  </Typography>

                  {instructor.teaches.map((subject, i) => (
                    <Typography key={i} variant="body2" color="textSecondary">
                      {subject}
                    </Typography>
                  ))}

                </CardContent>
                <Button href={instructor.linkedIn} target="_blank" sx={{ mt: 2, textTransform: "none" }}>
                  LinkedIn profile
                </Button>
              </Card>

            </Grid>
          ))}
        </Grid>

        <Button variant="contained" sx={{ mt: 5, bgcolor: '#FCC41B', color: '#000', }}>
          Book a Free Demo
        </Button>
      </Box>
    </Container>
  );
};

export default Learners;
