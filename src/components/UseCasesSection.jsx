import React from "react";
import "../App.css";

function UseCasesSection() {
  return (
    <section className="use-cases-section">
      <h2 className="use-cases-title">Use Cases</h2>
      <p className="use-cases-subtitle">
        <span className="use-cases-highlight">
          AI Melody offers a versatile range of consumer applications
        </span>
      </p>
      <div className="use-cases-grid">
        <div>
          <h3>Dubbing</h3>
          <p>Users can dub multilingual videos using either a professional Voice-Over from VOSTCO or their own natural voice</p>
        </div>
        <div>
          <h3>Preserve Voices</h3>
          <p>Our solution enables family members of patients diagnosed with unexpected laryngeal cancer to preserve their voice digitally before irreversible voice loss occurs</p>
        </div>
        <div>
          <h3>Memorial</h3>
          <p>Families can preserve the voices of their loved ones to cherish and listen to them later on for generations creating lasting memories</p>
        </div>
        <div>
          <h3>Virtual Assistants</h3>
          <p>Users can freely alter the voice of their favorite virtual assistants using voices obtained from VOSTCO</p>
        </div>
        <div>
          <h3>Custom Voices</h3>
          <p>Video game companies can easily use multiple voices for different NPCS without having to hire a real life voice actor</p>
        </div>
        <div>
          <h3>Song Writing</h3>
          <p>Anyone can create songs with an AI version of their favorite musicians by purchasing the Voice-Overs from our marketplace</p>
        </div>
      </div>
    </section>
  );
}

export default UseCasesSection; 