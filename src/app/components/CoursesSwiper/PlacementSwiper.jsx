import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .slider {
    margin-top: 20px;
    padding: 2em 0;
    overflow: hidden;
    position: relative;
    width: 100%; /* Full width container */
  }

  .slide-track {
    display: flex;
    gap: 2em;
    animation: scroll 30s linear infinite;
    width: calc(
      2 * ${(props) => props.placementItems.length} * 150px
    ); /* Double the content for seamless loop */
  }

  .slide {
    flex: 0 0 auto;
    width: 150px;
    height: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* .slide img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  } */

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(
        calc(-${(props) => props.placementItems.length} * 150px)
      );
    }
  }
`;

const PlacementSwiper = ({ placementItems }) => {
  const duplicatedItems = [...placementItems, ...placementItems];

  return (
    <Container placementItems={placementItems}>
      <div className='slider'>
        <div className='slide-track'>
          {duplicatedItems.map((item, index) => (
            <Box key={index}>
            <Card sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              m: 2,
              p:1.5
            }} >
            <div className='slide'>
              <img src={item.image} alt={`Company logo ${index}`} />
            </div>
            <div>
              <img src={item.image} alt={`Company logo ${index}`} />
              <Typography>{item.details}</Typography>
            </div>
            </Card>
            <Card sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              m: 2,
              p:1.5
            }} >
            <div className='slide'>
              <img src={item.image} alt={`Company logo ${index}`} />
            </div>
            <div>
              <img src={item.image} alt={`Company logo ${index}`} />
              <Typography>{item.details}</Typography>
            </div>
            </Card>
            </Box>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PlacementSwiper;
    