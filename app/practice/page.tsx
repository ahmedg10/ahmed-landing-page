"use client";
import React from "react";
import { motion } from "framer-motion";
import CopyButton from "../components/copyButton";

export default function Practice() {
  return (
    <div className="h-screen flex justify-center items-center bg-red-50">
      <CopyButton />
    </div>
  );
}
