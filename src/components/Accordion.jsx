import { useState } from 'react';
import './Accordion.css';
import IconSelector from './IconSelector'

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="accordion-item">
      <button
        onClick={onToggle}
        className="accordion-header"
      >
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon">
          <IconSelector
            color="#545454"
            name={isOpen ? "minusIcon" : "plusIcon"}
            size="medium"
          />
        </span>
      </button>
      {isOpen && (
        <div className="accordion-content">
          <p className="accordion-text">
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const accordionData = [
    {
      title: "Item 1",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, nullam tempor duis potenti litora justo."
    },
    {
      title: "Item 2", 
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, nullam tempor duis potenti litora justo."
    },
    {
      title: "Item 3",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, nullam tempor duis potenti litora justo."
    }
  ];

  return (
    <div className="accordion-container">
      <div className="accordion-wrapper">
        <div className="accordion-inner">
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openItems[index]}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;