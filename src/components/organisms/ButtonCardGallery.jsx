import React, { useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import Button from "../moleculas/Button";
import "./ButtonCardGallery.css";
import rectangle from "../../assets/Rectangle979.svg";

function normalizeImages(images) {
  const base = images && images.length ? images : [{ src: rectangle, alt: "placeholder" }];
  const four = base.slice(0, 4);
  while (four.length < 4) {
    four.push({ src: rectangle, alt: "placeholder" });
  }
  return four;
}

export default function ButtonCardGallery({
  title = "Título",
  description = "Descripción corta de la card.",
  buttonText = "Button",
  onButtonClick = () => {},
  buttonVariant = "btn-primary",
  buttonSize = "medium",
  buttonType = "button",
  images = [],
  imageFit = "cover",
  className = "",
}) {
  const thumbs = useMemo(() => normalizeImages(images), [images]);
  const [active, setActive] = useState(0);

  const setIndex = useCallback(
    (idx) => {
      if (idx >= 0 && idx < thumbs.length) setActive(idx);
    },
    [thumbs.length]
  );

  return (
    <div className={`button-card gallery-card-horizontal ${className}`}>
      <div className="gallery-media">
        <div className="gallery-hero">
          <img
            src={thumbs[active]?.src}
            alt={thumbs[active]?.alt || ""}
            style={{ objectFit: imageFit }}
          />
        </div>

        <div className="gallery-thumbs" role="listbox" aria-label="Miniaturas">
          {thumbs.map((img, i) => (
            <button
              key={`${img.src}-${i}`}
              type="button"
              className={`thumb ${i === active ? "is-active" : ""}`}
              aria-selected={i === active}
              onClick={() => setIndex(i)}
            >
              <img src={img.src} alt={img.alt || `miniatura ${i + 1}`} />
            </button>
          ))}
        </div>
      </div>

      <div className="card-text">
        <h5>{title}</h5>
        <hr className="gallery-divider" />
        <p>{description}</p>

        <Button
          onClick={onButtonClick}
          size={buttonSize}
          text={buttonText}
          type={buttonType}
          variant={buttonVariant}
        />
      </div>
    </div>
  );
}

ButtonCardGallery.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
  buttonVariant: PropTypes.string,
  buttonSize: PropTypes.oneOf(["small", "medium", "large"]),
  buttonType: PropTypes.oneOf(["button", "submit", "reset"]),
  images: PropTypes.arrayOf(
    PropTypes.shape({ src: PropTypes.string.isRequired, alt: PropTypes.string })
  ),
  imageFit: PropTypes.oneOf(["cover", "contain"]),
  className: PropTypes.string,
};

