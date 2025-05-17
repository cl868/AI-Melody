import React from "react";
import { motion } from "framer-motion";

export default function TestMotion() {
  return (
    <div style={{ minHeight: "200vh", paddingTop: "100vh" }}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        style={{
          background: "#ff0",
          padding: "2rem",
          fontSize: "2rem",
          textAlign: "center"
        }}
      >
        If you see this fade and slide up, Framer Motion is working!
      </motion.div>
    </div>
  );
}