"use client"; 
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { ReactLenis } from "lenis/react";
export default function LenisWrapper({ children }) {

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        syncTouch: true,
      }}
    >
      <div>
        {children}
      </div>
    </ReactLenis>
  );
}

// Add propTypes validation for 'children'
LenisWrapper.propTypes = {
  children: PropTypes.node.isRequired, // children can be any renderable node (string, number, element, etc.)
};
