import React, { useRef, useState, useEffect } from "react";
import videoSrc from "../assets/introducing-ai-melody-products.mp4";
import { motion } from "framer-motion";

function CustomVideoPlayer() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current && videoRef.current.play();
        } else {
          videoRef.current && videoRef.current.pause();
        }
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

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
      <video
        ref={videoRef}
        src={videoSrc}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "18px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
          display: "block",
          background: "#000"
        }}
        onPlay={handlePlay}
        onPause={handlePause}
        controls={false}
        playsInline
        muted
      />
      <button
        onClick={handlePlayPause}
        style={{
          position: "absolute",
          bottom: 16,
          right: 16,
          background: "rgba(0,0,0,0.6)",
          border: "none",
          borderRadius: "50%",
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 2
        }}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <svg width="28" height="28" viewBox="0 0 40 40" fill="white">
            <rect x="10" y="8" width="6" height="24" rx="2" />
            <rect x="24" y="8" width="6" height="24" rx="2" />
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 40 40" fill="white">
            <polygon points="12,8 32,20 12,32" />
          </svg>
        )}
      </button>
    </motion.div>
  );
}

export default CustomVideoPlayer;
