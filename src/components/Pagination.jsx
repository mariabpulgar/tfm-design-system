import React from "react";
import PropTypes from "prop-types";
import IconButton from "./IconButton";
import "./Pagination.css";

/** Util: rango inclusivo */
const range = (start, end) => {
  const out = [];
  for (let i = start; i <= end; i++) out.push(i);
  return out;
};

/** Versión simplificada y robusta para evitar duplicados */
function usePageItems({ totalPages, page, siblingCount, boundaryCount }) {
  if (totalPages <= 0) return [];
  if (totalPages <= 1) return [1];

  const items = [];
  
  // Si hay pocas páginas, mostrar todas
  if (totalPages <= 2 * (boundaryCount + siblingCount) + 3) {
    return range(1, totalPages);
  }

  // Páginas del inicio
  const leftBoundary = Math.min(boundaryCount, totalPages);
  for (let i = 1; i <= leftBoundary; i++) {
    items.push(i);
  }

  // Páginas alrededor de la actual
  const leftSibling = Math.max(page - siblingCount, 1);
  const rightSibling = Math.min(page + siblingCount, totalPages);

  // Elipsis izquierda
  if (leftSibling > leftBoundary + 2) {
    items.push("start-ellipsis");
  } else if (leftSibling === leftBoundary + 2) {
    items.push(leftBoundary + 1);
  }

  // Páginas siblings (evitando solapamiento)
  const startSibling = Math.max(leftSibling, leftBoundary + 1);
  const endSibling = Math.min(rightSibling, totalPages - boundaryCount);
  
  for (let i = startSibling; i <= endSibling; i++) {
    if (!items.includes(i)) {
      items.push(i);
    }
  }

  // Elipsis derecha
  const rightBoundary = totalPages - boundaryCount + 1;
  if (rightSibling < rightBoundary - 2) {
    items.push("end-ellipsis");
  } else if (rightSibling === rightBoundary - 2) {
    items.push(rightBoundary - 1);
  }

  // Páginas del final
  for (let i = rightBoundary; i <= totalPages; i++) {
    if (!items.includes(i)) {
      items.push(i);
    }
  }

  return items;
}

export default function Pagination({
  totalPages,
  page = 1,
  onChange,
  size = "medium",            
  siblingCount = 2,           // # de vecinos a cada lado
  boundaryCount = 1,          // # de páginas al inicio/fin
  showPrevNext = false,       
  prevIcon = "dropLeftIcon",     
  nextIcon = "dropRightIcon",    
  arrowVariant = "pagination",
  prevAriaLabel = "Página anterior",
  nextAriaLabel = "Página siguiente",
  ariaLabel = "Paginación",
  disabled = false,
  className = "",
}) {
  const items = usePageItems({ totalPages, page, siblingCount, boundaryCount });

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

        {items.map((it, idx) => {
          if (it === "start-ellipsis" || it === "end-ellipsis") {
            return (
              <li key={`${it}-${idx}`} className="pagination-ellipsis" aria-hidden="true" role="presentation">
                …
              </li>
            );
          }
          // Es un número de página
          const p = it;
          return (
            <li key={p} role="listitem">
              <IconButton
                variant="pagination"
                number={p}
                size={size}
                active={p === page}
                disabled={disabled}
                onClick={() => goTo(p)}
                aria-label={`Ir a la página ${p}`}
              />
            </li>
          );
        })}

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
  siblingCount: PropTypes.number,
  boundaryCount: PropTypes.number,
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