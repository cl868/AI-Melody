import React, { useRef } from "react";
import { motion } from "framer-motion";

function CustomVideoPlayer() {
  const containerRef = useRef(null);

  return (
    <motion.div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100vw",
        margin: "0 auto",
        boxSizing: "border-box"
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
          background: "#000"
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/2Vqg75zNz-U?rel=0&modestbranding=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "18px",
            display: "block",
            background: "#000"
          }}
        />
      </div>
    </motion.div>
  );
}

export default CustomVideoPlayer;
