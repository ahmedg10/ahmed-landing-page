import React from "react";
import styles from "./style.module.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CopyButton() {
  const variants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1 },
  };

  const [copied, setCopied] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      setDisabled(true); // Disable further clicks
      setCopied(true); // Start the "copied" animation

      setTimeout(() => {
        setCopied(false); // End the "copied" animation
        setDisabled(false); // Re-enable the button after animation
      }, 1500); // Adjust timeout to match your animation duration
    }
  };

  return (
    <button
      className="group absolute flex justify-center items-center w-[50px] h-[50px] bg-white rounded-xl border-gray-400/30 border-[2px]"
      onClick={handleClick}
      disabled={disabled} // Use the disabled attribute to prevent further clicks
    >
      <svg viewBox="-10 -25 135 135" style={{ width: "25px", height: "25px" }}>
        <AnimatePresence initial={false} mode="wait">
          {copied ? (
            <motion.g
              key="check"
              layout
              layoutId="image"
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <path
                d="M5 60.5L33.5 90L120.5 5"
                stroke="#F96611"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.g>
          ) : (
            <motion.g
              layout
              layoutId="image"
              key="copyIcon"
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <path
                fillRule="evenodd"
                className="group-hover:stroke-[#F96611] transition-all ease-out duration-150"
                clipRule="evenodd"
                d="M16 0.5C7.43959 0.5 0.5 7.43959 0.5 16V75C0.5 83.5604 7.43959 90.5 16 90.5H42V94C42 102.284 48.7157 109 57 109H101C109.284 109 116 102.284 116 94V35C116 26.7157 109.284 20 101 20H75.5V16C75.5 7.43959 68.5604 0.5 60 0.5H16ZM74.5 20V16C74.5 7.99187 68.0081 1.5 60 1.5H16C7.99187 1.5 1.5 7.99187 1.5 16V75C1.5 83.0081 7.99187 89.5 16 89.5H42V35C42 26.7157 48.7157 20 57 20H74.5ZM57 21H101C108.732 21 115 27.268 115 35V94C115 101.732 108.732 108 101 108H57C49.268 108 43 101.732 43 94V35C43 27.268 49.268 21 57 21Z"
                stroke="black"
                fill="none"
                strokeWidth="6"
              />
            </motion.g>
          )}
        </AnimatePresence>
      </svg>
    </button>
  );
}
