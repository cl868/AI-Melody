import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedSection = ({ children, yOffset = 40, duration = 0.7, ...props }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : yOffset
      }}
      transition={{ duration, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
