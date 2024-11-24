"use client"; 
import { ReactLenis } from "@studio-freight/react-lenis";


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