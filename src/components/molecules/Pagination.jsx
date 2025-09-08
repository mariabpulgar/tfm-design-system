import React from "react";
import PropTypes from "prop-types";
import IconButton from "./IconButton";
import "./Pagination.css";

/** Genera exactamente 3 páginas visibles basado en la página actual */
function useThreePageItems({ totalPages, page }) {
  if (totalPages <= 0) return [];
  if (totalPages === 1) return [1];
  if (totalPages === 2) return [1, 2];
  if (totalPages === 3) return [1, 2, 3];

  // Para más de 3 páginas, siempre mostrar exactamente 3
  let start, middle, end;

  if (page === 1) {
    // Si estamos en la primera página: [1, 2, 3]
    start = 1;
    middle = 2;
    end = 3;
  } else if (page === totalPages) {
    // Si estamos en la última página: [n-2, n-1, n]
    start = totalPages - 2;
    middle = totalPages - 1;
    end = totalPages;
  } else {
    // En cualquier otra página: [page-1, page, page+1]
    start = page - 1;
    middle = page;
    end = page + 1;
  }

  return [start, middle, end];
}

export default function Pagination({
  totalPages,
  page = 1,
  onChange,
  size = "medium",            
  showPrevNext = true,       // Cambio el default a true ya que es esencial para esta lógica
  prevIcon = "dropLeftIcon",     
  nextIcon = "dropRightIcon",    
  arrowVariant = "pagination",
  prevAriaLabel = "Página anterior",
  nextAriaLabel = "Página siguiente",
  ariaLabel = "Paginación",
  disabled = false,
  className = "",
}) {
  const items = useThreePageItems({ totalPages, page });

  const goTo = (p) => {
    if (disabled) return;
    const next = Math.min(Math.max(1, p), totalPages);
    if (next !== page) onChange?.(next);
  };

  return (
    <nav className={["pagination-root", className].filter(Boolean).join(" ")} aria-label={ariaLabel}>
      <ul className="pagination-list" role="list">
        {showPrevNext && (
          <li role="listitem">
            <IconButton
              variant={arrowVariant}   
              iconName={prevIcon}      
              size={size}
              disabled={disabled || page <= 1}
              onClick={() => goTo(page - 1)}
              aria-label={prevAriaLabel}
            />
          </li>
        )}

        {items.map((pageNumber) => (
          <li key={pageNumber} role="listitem">
            <IconButton
              variant="pagination"
              number={pageNumber}
              size={size}
              active={pageNumber === page}
              disabled={disabled}
              onClick={() => goTo(pageNumber)}
              aria-label={`Ir a la página ${pageNumber}`}
            />
          </li>
        ))}

        {showPrevNext && (
          <li role="listitem">
            <IconButton
              variant={arrowVariant}   
              iconName={nextIcon}      
              size={size}
              disabled={disabled || page >= totalPages}
              onClick={() => goTo(page + 1)}
              aria-label={nextAriaLabel}
            />
          </li>
        )}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large", "extraLarge", "display"]),
  showPrevNext: PropTypes.bool,
  prevIcon: PropTypes.string,
  nextIcon: PropTypes.string,
  arrowVariant: PropTypes.oneOf(["pagination", "default", "primary", "secondary", "tertiary", "error", "text"]),
  prevAriaLabel: PropTypes.string,
  nextAriaLabel: PropTypes.string,
  ariaLabel: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};