import React from 'react';
import Grid from '@mui/material/Grid2'
import { Box, Button, Container, Typography } from '@mui/material';
import PlacementSwiper from '../CoursesSwiper/PlacementSwiper';
//import flagImg from "../../../../assets/herosection/flag.png";
import WebDevelopment from '../../../../assets/Brochurepdf/ayushnewnode-1.pdf'

const Coursebrocher = () => {
  const buttonContent = [
    { label: "Download Web Development brochure", file:  WebDevelopment  },
    { label: "Download Web Designing brochure", file: "/brochures/web-designing.pdf" },
    { label: "Download Graphic Designing brochure", file: "/brochures/graphic-designing.pdf" },
    { label: "Download Video Editing brochure", file: "/brochures/video-editing.pdf" },
    { label: "Download Digital Marketing brochure", file: "/brochures/digital-marketing.pdf" },
    { label: "Download UI/UX Designing brochure", file: "/brochures/ui-ux-designing.pdf" }
  ];

  const placementItems = [
    {
      image: "https://files.codingninjas.com/screenshot_2024-02-08_153909-removebg-preview-1707388361.webp",
      compimage: "https://files.codingninjas.com/axa-v2-1707477934.webp",
      details: "424% hike"
    },
    {
      image: "https://files.codingninjas.com/screenshot_2024-02-08_153909-removebg-preview-1707388361.webp",
      compimage: "https://files.codingninjas.com/axa-v2-1707477934.webp",
      details: "424% hike"
    },
    {
      image: "https://files.codingninjas.com/screenshot_2024-02-08_153909-removebg-preview-1707388361.webp",
      compimage: "https://files.codingninjas.com/axa-v2-1707477934.webp",
      details: "424% hike"
    },
    {
      image: "https://files.codingninjas.com/screenshot_2024-02-08_153909-removebg-preview-1707388361.webp",
      compimage: "https://files.codingninjas.com/axa-v2-1707477934.webp",
      details: "424% hike"
    },
    {
      image: "https://files.codingninjas.com/screenshot_2024-02-08_153909-removebg-preview-1707388361.webp",
      compimage: "https://files.codingninjas.com/axa-v2-1707477934.webp",
      details: "424% hike"
    },
    {
      image: "https://files.codingninjas.com/screenshot_2024-02-08_153909-removebg-preview-1707388361.webp",
      compimage: "https://files.codingninjas.com/axa-v2-1707477934.webp",
      details: "424% hike"
    },
  ]
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" mt={{ xs: 0, md: 6, lg: 9 }}>
        <Container>
          <Grid container >
            <Grid size={12}>
              <Typography sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "30px",
              }}>
                Course Brochure
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            {buttonContent.map((item, id) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={id}>
                <a href={item.file} download style={{ textDecoration: 'none' }}>
                  <Button sx={{
                    background: "#1E1E1E",
                    color: "white",
                    boxShadow: "revert",
                    width: "95%",
                    p: 1.5,
                    mt: 3,
                    borderRadius: 3
                  }}>
                    {item.label}
                  </Button>
                </a>
              </Grid>
            ))}
          </Grid>
          <Grid container sx={{ mt: 6 }}>
            <Grid size={12}>
              <Typography sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "30px",
              }}>
                Digibeez who took this bootcamp got hired at
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid size={12}>
              <PlacementSwiper placementItems={placementItems} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Coursebrocher;