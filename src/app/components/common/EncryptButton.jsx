import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { GrProjects } from "react-icons/gr";
import { motion } from "framer-motion";

const EncButton = ({ text }) => {
  return (
    <div className="grid place-content-center">
      <EncryptButton textProp={text} />
    </div>
  );
};

// Add PropTypes validation for EncButton
EncButton.propTypes = {
  text: PropTypes.string.isRequired, // text must be a string and is required
};

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = ({ textProp }) => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(textProp);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      if (pos >= textProp.length * CYCLES_PER_LETTER) {
        stopScramble();
        return;
      }

      const scrambled = textProp
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          return CHARS[randomCharIndex];
        })
        .join("");

      setText(scrambled);
      pos++;
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(textProp);
  };

  return (
    <motion.button
      aria-label={`Encrypt button with text ${text}`}
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      transition={{ type: "spring", stiffness: "100" }}
      className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-indigo-300"
    >
      <div className="relative z-10 flex items-center gap-2">
        <GrProjects />
        <span>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

// Add PropTypes validation for EncryptButton
EncryptButton.propTypes = {
  textProp: PropTypes.string.isRequired, // textProp must be a string and is required
};

export default EncButton;
