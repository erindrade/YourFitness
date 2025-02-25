import React from "react";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";
import { BmiCalculator, CalorieCalculator } from "../components/Calculator";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          BMI Calculator
        </Typography>
        <BmiCalculator />
      </Box>

      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Calorie Calculator
        </Typography>
        <CalorieCalculator />
      </Box>
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
