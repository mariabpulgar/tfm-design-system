import { useState } from 'react';
import './Accordion.css';
import IconSelector from '../atomos/IconSelector';

const AccordionItem = ({ title, content, isOpen, onToggle, index }) => {
  const contentId = `accordion-content-${index}`;
  const headerId = `accordion-header-${index}`;

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <button
        onClick={onToggle}
        className="accordion-header"
        aria-expanded={isOpen}
        aria-controls={contentId}
        id={headerId}
        type="button"
      >
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon">
          <IconSelector
            color="var(--gray-darker)"
            name={isOpen ? 'minusIcon' : 'plusIcon'}
            size="medium"
          />
        </span>
      </button>

      <div
        className="accordion-content"
        id={contentId}
        role="region"
        aria-labelledby={headerId}
      >
        <p className="accordion-text">{content}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionData = [
    {
      title: 'Item 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, nullam tempor duis potenti litora justo.',
    },
    {
      title: 'Item 2',
      content:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, nullam tempor duis potenti litora justo.',
    },
    {
      title: 'Item 3',
      content:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, nullam tempor duis potenti litora justo.',
    },
  ];

  return (
    <div className="accordion-container">
      <div className="accordion-wrapper">
        <div className="accordion-inner">
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              index={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
