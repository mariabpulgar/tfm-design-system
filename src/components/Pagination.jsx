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

/** Calcula items de paginación con elipsis */
function usePageItems({ totalPages, page, siblingCount, boundaryCount }) {
  // Casos triviales
  if (totalPages <= 0) return [];
  if (totalPages <= 1) return [1];

  const startPages = range(1, Math.min(boundaryCount, totalPages));
  const endPages = range(
    Math.max(totalPages - boundaryCount + 1, boundaryCount + 1),
    totalPages
  );

  const siblingsStart = Math.max(
    Math.min(
      page - siblingCount,
      totalPages - boundaryCount - siblingCount * 2
    ),
    boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(
      page + siblingCount,
      boundaryCount + siblingCount * 2 + 1
    ),
    endPages.length > 0 ? endPages[0] - 2 : totalPages - 1
  );

  const items = [...startPages];

  // Elipsis izquierda
  if (siblingsStart > boundaryCount + 2) {
    items.push("start-ellipsis");
  } else if (boundaryCount + 1 < siblingsStart) {
    items.push(boundaryCount + 1);
  }

  // Siblings
  items.push(...range(siblingsStart, siblingsEnd));

  // Elipsis derecha
  if (siblingsEnd < totalPages - boundaryCount - 1) {
    items.push("end-ellipsis");
  } else if (siblingsEnd + 1 <= totalPages - boundaryCount) {
    items.push(siblingsEnd + 1);
  }

  // Últimos
  items.push(...endPages);

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
              variant={arrowVariant}   // mismo estilo cuadrado
              iconName={nextIcon}      // ← ícono derecho desde IconSelector
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