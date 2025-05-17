import React from "react";
import "../App.css";
import videoSrc from "../assets/introducing-ai-melody-products.mp4";

const useCases = [
  {
    title: "Dubbing",
    desc: "Users can dub multilingual videos using either a professional Voice-Over from VOSTCO or their own natural voice"
  },
  {
    title: "Preserve Voices",
    desc: "Our solution enables family members of patients diagnosed with unexpected laryngeal cancer to preserve their voice digitally before irreversible voice loss occurs"
  },
  {
    title: "Memorial",
    desc: "Families can preserve the voices of their loved ones to cherish and listen to them later on for generations creating lasting memories"
  },
  {
    title: "Virtual Assistants",
    desc: "Users can freely alter the voice of their favorite virtual assistants using voices obtained from VOSTCO"
  },
  {
    title: "Custom Voices",
    desc: "Video game companies can easily use multiple voices for different NPCS without having to hire a real life voice actor"
  },
  {
    title: "Song Writing",
    desc: "Anyone can create songs with an AI version of their favorite musicians by purchasing the Voice-Overs from our marketplace"
  }
];

function UseCases() {
  return (
    <section className="use-cases">
      <h2>Use Cases</h2>
      <p className="use-cases-subtitle">
        <span className="highlight">AI Melody offers a versatile range of consumer applications</span>
      </p>
      <div className="use-cases-grid">
        {useCases.map(({ title, desc }) => (
          <div key={title} className="use-case-card">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UseCases;