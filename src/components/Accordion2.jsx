// src/components/Accordion2.jsx
import React, { useState } from "react";
import "./Accordion.css";
import Button from "./Button";

function Accordion2({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion2">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const contentId = `accordion-content-${index}`;
        const headerId = `accordion-header-${index}`;

        return (
          <div className="accordion2-item" key={index}>
            <h3 className="accordion2-header" id={headerId}>
              <Button
                variant="btn-text"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggle(index)}
                className="accordion2-button"
              >
                {item.title}
                <span className="accordion2-icon">
                  {isOpen ? "−" : "+"}
                </span>
              </Button>
            </h3>
            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={headerId}
                className="accordion2-panel"
              >
                <p>{item.content}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion2;
