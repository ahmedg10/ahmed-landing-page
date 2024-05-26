"use client";
import React from "react";
import { motion } from "framer-motion";
import CopyButton from "../components/copyButton";
import FeedbackPopUp from "../components/FeedbackPopUp";

export default function Practice() {
  return (
    <div className="h-screen flex justify-center items-center">
      <FeedbackPopUp />
    </div>
  );
}
