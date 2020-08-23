import React from "react";
import { FiUsers } from "react-icons/fi";
import { FaDrum, FaGuitar, FaMicrophoneAlt } from "react-icons/fa";
import { GiPianoKeys, GiGuitar } from "react-icons/gi";
export const ServiceList = [
  {
    icon: <FaGuitar />,
    title: "Guitar Lessons",
    description:
      "Guitar lessons personally designed to meet the needs of each student.",
  },
  {
    icon: <FaDrum />,
    title: "Drum Lessons",
    description:
      "Drum lessons personally designed to meet the needs of each student.",
  },
  {
    icon: <GiPianoKeys />,
    title: "Piano Lessons",
    description:
      "Piano lessons personally designed to meet the needs of each student.",
  },
  {
    icon: <GiGuitar />,
    title: "Bass Lessons",
    description:
      "Bass lessons personally designed to meet the needs of each student.",
  },
  {
    icon: <FaMicrophoneAlt />,
    title: "Vocal Lessons",
    description:
      "Voice lessons personally designed to meet the needs all students.",
  },
  {
    icon: <FiUsers />,
    title: "Group Music Lessons",
    description:
      "Group music lessons personally designed to meet the needs all students.",
  },
];
