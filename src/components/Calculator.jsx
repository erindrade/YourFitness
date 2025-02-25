import React, { useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  MenuItem,
  Card,
  CardContent,
} from "@mui/material";

export const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBmi = () => {
    if (height && weight) {
      const bmiResult = (weight / Math.pow(height / 100, 2)).toFixed(2);
      setBmi(bmiResult);
    }
  };

  return (
    <Card>
      <CardContent>
        <Box id="calculator" sx={{ mt: { lg: "110pxx" } }} mt="50px" p="20-x">
          <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={2}
            alignItems={{ xs: "center", lg: "initial" }}
            justifyContent="center"
          >
            <TextField
              label="Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <TextField
              label="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <Button
              onClick={calculateBmi}
              variant="contained"
              color="error"
              sx={{
                backgroundColor: "#ff2625",
                padding: "10px",
              }}
            >
              Calculate BMI
            </Button>
          </Stack>
          {bmi && (
            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  p: 2,
                  backgroundColor: "#ff2625",
                  width: "fit-content",
                  border: "5px dashed white",
                  color: "#fff",
                }}
              >
                <Typography textAlign="center">
                  Your BMI is {bmi}. You are{" "}
                  {bmi < 18.5
                    ? "underweight"
                    : bmi < 25
                    ? "at a healthy weight"
                    : bmi < 30
                    ? "overweight"
                    : "obese"}
                  .
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export const CalorieCalculator = () => {
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [calories, setCalories] = useState(0);

  const calculateCalories = () => {
    let bmr = 0;

    if (gender === "male") {
      bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
    } else if (gender === "female") {
      bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
    }

    let caloriesValue = 0;

    if (activityLevel === "sedentary") {
      caloriesValue = bmr * 1.2;
    } else if (activityLevel === "lightlyActive") {
      caloriesValue = bmr * 1.375;
    } else if (activityLevel === "moderatelyActive") {
      caloriesValue = bmr * 1.55;
    } else if (activityLevel === "veryActive") {
      caloriesValue = bmr * 1.725;
    } else if (activityLevel === "extraActive") {
      caloriesValue = bmr * 1.9;
    }

    setCalories(caloriesValue.toFixed(2));
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ mt: { lg: "110pxx" } }} mt="50px" p="20-x">
          <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={2}
            alignItems={{ xs: "center", lg: "initial" }}
            justifyContent="center"
          >
            <TextField
              label="Age"
              value={age}
              type="number"
              onChange={(e) => setAge(e.target.value)}
            />
            <TextField
              label="Height (cm)"
              value={height}
              type="number"
              onChange={(e) => setHeight(e.target.value)}
            />
            <TextField
              label="Weight (kg)"
              value={weight}
              type="number"
              onChange={(e) => setWeight(e.target.value)}
            />
            <TextField
              select
              label="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              sx={{ minWidth: "120px" }}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </TextField>
            <TextField
              select
              label="Activity Level"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              sx={{ minWidth: "120px" }}
            >
              <MenuItem value="sedentary">Sedentary</MenuItem>
              <MenuItem value="lightlyActive">Lightly Active</MenuItem>
              <MenuItem value="moderatelyActive">Moderately Active</MenuItem>
              <MenuItem value="veryActive">Very Active</MenuItem>
              <MenuItem value="extraActive">Extra Active</MenuItem>
            </TextField>
            <Button
              style={{ display: "flex", flexDirection: "column" }}
              onClick={calculateCalories}
              justifyContent="center"
              variant="contained"
              color="error"
              sx={{
                backgroundColor: "#ff2625",
                padding: "10px",
                mt: "10px",
              }}
            >
              Calculate Calories
            </Button>
          </Stack>
          {calories > 0 && (
            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  p: 2,
                  backgroundColor: "#ff2625",
                  width: "fit-content",
                  border: "5px dashed white",
                  color: "#fff",
                }}
              >
                <Typography>
                  Your daily calorie intake should be {calories} calories.
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
