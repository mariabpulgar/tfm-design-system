// CarruselTestimonial.jsx
import React, { useState, useEffect } from 'react';
import './CarruselTestimonial.css';
import Testimonial from '../molecules/Testimonial';
import IconButton from '../molecules/IconButton';

function CarruselTestimonial({ 
  children, 
  items = [], 
  autoSlide = false, 
  autoSlideInterval = 5000 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  
  const hasChildren = React.Children.count(children) > 0;
  const totalItems = hasChildren ? React.Children.count(children) : items.length;
  
  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerView(1); // Mobile
      } else if (width < 1024) {
        setItemsPerView(2); // Tablet
      } else {
        setItemsPerView(3); // Desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto slide
  useEffect(() => {
    if (!autoSlide || totalItems <= itemsPerView) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const maxIndex = totalItems - itemsPerView;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, totalItems, itemsPerView]);

  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex(prev => prev === 0 ? maxIndex : prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  // Touch handlers for mobile swipe
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Create content array
  const contentArray = hasChildren 
    ? React.Children.toArray(children)
    : items.map((t, i) => (
        <Testimonial
          key={i}
          imageSrc={t.imageSrc}
          altText={t.altText}
          text={t.text}
          userName={t.userName}
        />
      ));

  // Get visible items
  const visibleItems = contentArray.slice(currentIndex, currentIndex + itemsPerView);

  // Show/hide buttons based on items
  const showButtons = totalItems > itemsPerView;

  return (
    <div className="carrusel-testimonial-container">
      {showButtons && (
        <div className="left-button">
          <IconButton
            iconName="dropLeftIcon"
            onClick={handlePrev}
            size="medium"
            variant="outline"
            aria-label="Ver testimonio anterior"
          />
        </div>
      )}

      <div 
        className="testimonials"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {visibleItems}
      </div>

      {showButtons && (
        <div className="right-button">
          <IconButton
            iconName="dropRightIcon"
            onClick={handleNext}
            size="medium"
            variant="outline"
            aria-label="Ver siguiente testimonio"
          />
        </div>
      )}
    </div>
  );
}

export default CarruselTestimonial;