import React from "react";
import { Stack, Typography } from "@mui/material";

import Gym from "../assets/icons/all-gym.png";
import Shoulder from "../assets/icons/shoulder.png";
import Chest from "../assets/icons/male.png";
import Neck from "../assets/icons/neck.png";
import Waist from "../assets/icons/body.png";
import Back from "../assets/icons/back-pain.png";
import Cardio from "../assets/icons/cardio.png";
import lowerArms from "../assets/icons/forearm.png";
import lowerLegs from "../assets/icons/calves.png";
import upperArms from "../assets/icons/biceps.png";
import upperLegs from "../assets/icons/quadricep.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const bodyPartImages = {
    all: Gym,
    chest: Chest,
    neck: Neck,
    shoulders: Shoulder,
    back: Back,
    cardio: Cardio,
    waist: Waist,
    "upper arms": upperArms,
    "upper legs": upperLegs,
    "lower arms": lowerArms,
    "lower legs": lowerLegs,
  };

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={bodyPartImages[item]}
        alt={item}
        style={{ width: "40px", height: "40px" }}
      />
      <Typography textTransform="capitalize">{item}</Typography>
    </Stack>
  );
};

export default BodyPart;
