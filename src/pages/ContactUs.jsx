import React, { useState } from "react";
import Select from "react-select";
import "../App.css";
import AnimatedSection from "../UI/AnimatedSection";

const subjectOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "support", label: "Support" },
  { value: "feedback", label: "Feedback" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" }
];

function ContactUs() {
  const [subject, setSubject] = useState(null);

  return (
    <AnimatedSection>
      <section className="contact-section">
        <form className="contact-form">
          <h2 className="contact-title">GET IN TOUCH</h2>
          <div className="contact-row">
            <input className="contact-input half-width" type="text" placeholder="First Name" />
            <input className="contact-input half-width" type="text" placeholder="Last Name" />
          </div>
          <input className="contact-input full-width" type="email" placeholder="Email Address" />
          <input className="contact-input full-width" type="tel" placeholder="Phone Number" />
          <div className="select-wrapper">
            <Select
              className="contact-input full-width"
              options={subjectOptions}
              value={subject}
              onChange={setSubject}
              placeholder="Subject"
              styles={{
                control: (provided) => ({
                  ...provided,
                  fontFamily: '"New York", "Times New Roman", Times, serif',
                  fontSize: "0.8rem",
                  backgroundColor: "#fafafa",
                  borderColor: "#d3d3d3",
                  borderRadius: 16,
                  minHeight: 48,
                  color: "#bbb",
                  boxShadow: "none"
                }),
                singleValue: (provided) => ({
                  ...provided,
                  fontFamily: '"New York", "Times New Roman", Times, serif',
                  fontSize: "0.8rem",
                  color: "#000",
                }),
                placeholder: (provided) => ({
                  ...provided,
                  fontFamily: '"New York", "Times New Roman", Times, serif',
                  fontSize: "0.8rem",
                  color: "#c0c0c0",
                }),
                option: (provided, state) => ({
                  ...provided,
                  fontFamily: '"New York", "Times New Roman", Times, serif',
                  fontSize: "0.8rem",
                  color: "#c0c0c0",
                  backgroundColor: state.isFocused ? "#f0f0f0" : "#fff",
                }),
                input: (provided) => ({
                  ...provided,
                  fontFamily: '"New York", "Times New Roman", Times, serif',
                  fontSize: "0.8rem",
                }),
              }}
              isSearchable={false}
            />
          </div>
          <textarea className="contact-input full-width message-textarea" placeholder="Message"></textarea>
          <button type="submit" className="contact-submit-btn">Submit</button>
        </form>
      </section>
    </AnimatedSection>
  );
}

export default ContactUs;
