import React from "react";
import "../App.css";

function VocalAITraining() {
  return (
    <div className="vocal-ai-training-section">
      <div className="vocal-ai-training-steps">
        <div className="vocal-ai-training-step small">
          Insert a<br />Voice-Over<br />Name
        </div>
        <span className="vocal-ai-training-arrow">→</span>
        <div className="vocal-ai-training-step">
          Record your voice realtime on the plugin to upload Voice as a "Verified" purchasable Voice-Over
        </div>
        <span className="vocal-ai-training-arrow">→</span>
        <div className="vocal-ai-training-step">
          Drag and Drop Zip or Audio File to create an "Unverified" purchasable Voice-Over
        </div>
        <span className="vocal-ai-training-arrow">→</span>
        <div className="vocal-ai-training-step small">
          Insert basic info for voice-training
        </div>
        <span className="vocal-ai-training-arrow">→</span>
        <div className="vocal-ai-training-step">
          Click the train button either "Upload" to VOSTCO or save on "Private" Cloud
        </div>
      </div>
    </div>
  );
}

export default VocalAITraining; 