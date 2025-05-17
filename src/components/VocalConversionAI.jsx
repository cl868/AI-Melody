import React from "react";
import "../App.css";

function VocalConversionAI() {
  return (
    <div>
      <h2 className="vocal-ai-training-title">Vocal Conversion AI</h2>
      <div className="vocal-ai-training-section">
        <div className="vocal-ai-training-steps">
          <div className="vocal-ai-training-step small">
            Record or<br />Drag and Drop<br />Voice Audio
          </div>
          <span className="vocal-ai-training-arrow">→</span>
          <div className="vocal-ai-training-step small">
            Select Voice-<br />Over
          </div>
          <span className="vocal-ai-training-arrow">→</span>
          <div className="vocal-ai-training-step">
            Select a gender you are converting to<br />ex) M → F, F → M, M → M, F → F
          </div>
          <span className="vocal-ai-training-arrow">→</span>
          <div className="vocal-ai-training-step">
            Control Pitch, insert BPM and Key
          </div>
          <span className="vocal-ai-training-arrow">→</span>
          <div className="vocal-ai-training-step small">
            Click<br />"Convert"
          </div>
        </div>
      </div>
    </div>
  );
}

export default VocalConversionAI; 