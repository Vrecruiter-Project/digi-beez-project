import React from "react";
import { Box, Typography, Grid2, Button } from "@mui/material";

const data = [
    { label: "Final year students", percentage: "12%", color: "#A52A2A", size: 120 },
    { label: "Non CS", percentage: "14%", color: "#4682B4", size: 150 },
    { label: "Service company engineers", percentage: "41%", color: "#DAA520", size: 250 },
    { label: "Non technical roles", percentage: "27%", color: "#228B22", size: 200 },
    { label: "Others", percentage: "6%", color: "#8A2BE2", size: 100 },
];

const OurExperience = () => {
    return (
        <Box sx={{ textAlign: "center", p: 4 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Our learners bring varied backgrounds and experiences
            </Typography>
            <Box
                sx={{
                    p: 4,
                    borderRadius: 4,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 2,
                }}
            >
                <Grid2 container spacing={2} justifyContent="center" sx={{ backgroundColor: 'red', borderRadius: 20, p: 10, background: "#121212" }}>
                    {data.map((item, index) => (
                        <Grid2 key={index} xs={12} sm={6} md={4} lg={3} display="flex" justifyContent="center">
                            <Box
                                sx={{
                                    width: item.size,
                                    height: item.size,
                                    borderRadius: "50%",
                                    background: "#1E1E1E",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderLeft: `2px solid ${item.color}`,
                                    color: "#fff",
                                    ":hover": {
                                        boxShadow: "10px solid black"
                                    }
                                }}
                            >
                                <Typography variant="body1">{item.label}</Typography>
                                <Typography variant="h6" fontWeight="bold">
                                    {item.percentage}
                                </Typography>
                            </Box>
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
            <Button variant="contained" sx={{ mt: 4, bgcolor: '#FCC41B', color: '#000', }}>
                Book a Free Demo
            </Button>
        </Box>
    );
};

export default OurExperience;
