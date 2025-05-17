import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import UseCasesSection from "../components/UseCasesSection";
import CustomVideoPlayer from "../components/CustomVideoPlayer";
import AnimatedSection from "../UI/AnimatedSection";
import ProductOverview from "../components/ProductOverview";
import { useNavigate } from "react-router-dom";

function Home() {
  // Refs for each section
  const videoRef = useRef(null);
  const useCasesRef = useRef(null);

  // In-view state for each section
  const videoInView = useInView(videoRef, { amount: 0.3 });
  const useCasesInView = useInView(useCasesRef, { amount: 0.3 });

  const navigate = useNavigate();

  return (
    <div>
      {/* Video Section animates in and out on scroll */}
      <motion.div
        ref={videoRef}
        animate={{
          opacity: videoInView ? 1 : 0,
          y: videoInView ? 0 : 40
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ margin: "0 10px" }}
      >
        <CustomVideoPlayer />
      </motion.div>

      {/* Use Cases Section animates in and out on scroll */}
      <motion.div
        ref={useCasesRef}
        animate={{
          opacity: useCasesInView ? 1 : 0,
          y: useCasesInView ? 0 : 40
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <UseCasesSection />
      </motion.div>
      
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ marginLeft: "50px", marginRight: "30px" }}
        >
          <ProductOverview />
        </motion.div>
      
      
    </div>
  );
}

export default Home;