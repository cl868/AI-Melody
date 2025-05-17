import React, { useEffect } from "react";
import VostcoMarketplaceSection from "../components/VostcoMarketplaceSection";
import ProductShowcase from "../components/ProductShowcase";
import AnimatedSection from "../UI/AnimatedSection";
import { useNavigate, Link, useLocation } from "react-router-dom";

function Vostco() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); 
    }
  }, [location]);

  return (
    <div>
      <VostcoMarketplaceSection />
      <ProductShowcase />
      
    </div>
  );
}

export default Vostco;