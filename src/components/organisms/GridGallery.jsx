import React, { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Image from "../atoms/Image";
import Pagination from "../molecules/Pagination";
import './GridGallery.css'

/** Hook controlado/no controlado para la página actual */
function useControlledPage(pageProp, defaultPage, onChange) {
  const isControlled = pageProp != null;
  const [inner, setInner] = useState(defaultPage ?? 1);
  const page = isControlled ? pageProp : inner;

  const setPage = (next) => {
    if (!isControlled) setInner(next);
    onChange?.(next);
  };

  return [page, setPage];
}

/**
 * GridGallery reutilizable
 * - Renderiza 6 imágenes por página (configurable con `pageSize`)
 * - Puedes controlar la página desde fuera (prop `page`) o dejar que maneje su propio estado (`defaultPage`)
 * - Permite personalizar textos/etiquetas, patrón de variantes, orden de la imagen grande por fila, e incluso sobrescribir el render
 */
export default function GridGallery({
  /** Datos */
  images,                                  // [{ src, alt?, id?, variant? }, ...]
  page,                                    // modo controlado si se pasa
  defaultPage = 1,                         // modo no controlado
  pageSize = 6,                            // por defecto 6 (2 filas x 3 columnas)

  /** UI/Contenido */
  title = (current, total) => `Grid gallery - Página ${current} de ${total}`,
  showTitle = true,

  /** Patrón de variantes por posición (se aplica si el item no trae `variant`) */
  variantPattern = [
    "img-grid-gallery-large",
    "img-grid-gallery-small",
    "img-grid-gallery-small",
    "img-grid-gallery-small",
    "img-grid-gallery-small",
    "img-grid-gallery-large",
  ],

  /** Dónde va la imagen grande en cada fila */
  largePositions = ["left", "right"],      // fila 1: left, fila 2: right

  /** Clases CSS (coinciden con tu hoja) */
  containerClass = "grid-gallery-container",
  titleClass = "grid-gallery-title",
  firstRowClass = "grid-first-row",
  secondRowClass = "grid-second-row",
  smallImagesClass = "small-images",
  paginationClass = "grid-gallery-pagination",

  /** Props de Pagination (passthrough) */
  paginationSize = "medium",
  siblingCount = 1,
  boundaryCount = 1,
  showPrevNext = true,
  prevIcon = "dropLeftIcon",
  nextIcon = "dropRightIcon",
  arrowVariant = "pagination",
  prevAriaLabel = "Página anterior",
  nextAriaLabel = "Página siguiente",
  ariaLabel = "Paginación de galería",
  disabled = false,

  /** Callbacks */
  onPageChange,                             // (nextPage) => void

  /** Overrides opcionales */
  renderImage,                              // (item, indexAbs, indexInPage) => ReactNode
  renderPagination,                         // (paginationProps) => ReactNode
  renderTitle,                              // (currentPage, totalPages) => ReactNode
}) {
  const [currentPage, setCurrentPage] = useControlledPage(page, defaultPage, onPageChange);
  const totalPages = Math.max(1, Math.ceil((images?.length ?? 0) / pageSize));

  // Ajusta la página si cambia el total (por filtros, etc.)
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [totalPages]); // eslint-disable-line react-hooks/exhaustive-deps

  // Página actual de imágenes
  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return (images ?? []).slice(start, start + pageSize);
  }, [images, currentPage, pageSize]);

  // Rellena slots hasta 6 para mantener el layout (si hay menos)
  const filled = useMemo(() => {
    const arr = [...pageItems];
    while (arr.length < 6) arr.push(null);
    return arr;
  }, [pageItems]);

  // Aplica patrón de variantes solo si un ítem no trae `variant`
  const decorated = filled.map((img, idx) =>
    img
      ? {
          ...img,
          variant: img.variant || variantPattern[idx] || img.variant,
          alt: img.alt ?? `Imagen ${idx + 1 + (currentPage - 1) * pageSize}`,
        }
      : null
  );

  // Posiciones: [0]=grande fila1, [1,2]=pequeñas fila1, [3,4]=pequeñas fila2, [5]=grande fila2
  const r1Large = decorated[0];
  const r1Smalls = [decorated[1], decorated[2]].filter(Boolean);
  const r2Smalls = [decorated[3], decorated[4]].filter(Boolean);
  const r2Large = decorated[5];

  const renderImg = (item, idxInPage) => {
    if (!item) return null;
    const indexAbs = (currentPage - 1) * pageSize + idxInPage;
    return renderImage ? (
      renderImage(item, indexAbs, idxInPage)
    ) : (
      <Image
        key={`${indexAbs}-${item.src}`}
        alt={item.alt}
        src={item.src}
        variant={item.variant}
      />
    );
  };

  const paginationProps = {
    totalPages,
    page: currentPage,
    onChange: setCurrentPage,
    size: paginationSize,
    siblingCount,
    boundaryCount,
    showPrevNext,
    prevIcon,
    nextIcon,
    arrowVariant,
    prevAriaLabel,
    nextAriaLabel,
    ariaLabel,
    disabled,
  };

  return (
    <div className={containerClass}>
      {showTitle && (
        <div className={titleClass}>
          {renderTitle ? renderTitle(currentPage, totalPages) : <h2>{typeof title === "function" ? title(currentPage, totalPages) : title}</h2>}
        </div>
      )}

      {/* Fila 1 */}
      <div className={firstRowClass}>
        {largePositions[0] === "left" ? (
          <>
            {renderImg(r1Large, 0)}
            <div className={smallImagesClass}>
              {r1Smalls.map((it, i) => renderImg(it, 1 + i))}
            </div>
          </>
        ) : (
          <>
            <div className={smallImagesClass}>
              {r1Smalls.map((it, i) => renderImg(it, 1 + i))}
            </div>
            {renderImg(r1Large, 0)}
          </>
        )}
      </div>

      {/* Fila 2 */}
      <div className={secondRowClass}>
        {largePositions[1] === "left" ? (
          <>
            {renderImg(r2Large, 5)}
            <div className={smallImagesClass}>
              {r2Smalls.map((it, i) => renderImg(it, 3 + i))}
            </div>
          </>
        ) : (
          <>
            <div className={smallImagesClass}>
              {r2Smalls.map((it, i) => renderImg(it, 3 + i))}
            </div>
            {renderImg(r2Large, 5)}
          </>
        )}
      </div>

      {/* Paginación */}
      <div className={paginationClass}>
        {renderPagination ? renderPagination(paginationProps) : <Pagination {...paginationProps} />}
      </div>
    </div>
  );
}

GridGallery.propTypes = {
  /** Datos */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      variant: PropTypes.string,
    })
  ).isRequired,

  /** Control de página */
  page: PropTypes.number,
  defaultPage: PropTypes.number,
  pageSize: PropTypes.number,

  /** Contenido */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]), // (current, total) => string
  showTitle: PropTypes.bool,

  /** Variantes y posiciones */
  variantPattern: PropTypes.arrayOf(PropTypes.string),
  largePositions: PropTypes.arrayOf(PropTypes.oneOf(["left", "right"])),

  /** Clases CSS existentes */
  containerClass: PropTypes.string,
  titleClass: PropTypes.string,
  firstRowClass: PropTypes.string,
  secondRowClass: PropTypes.string,
  smallImagesClass: PropTypes.string,
  paginationClass: PropTypes.string,

  /** Pagination passthrough */
  paginationSize: PropTypes.oneOf(["small", "medium", "large", "extraLarge", "display"]),
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

  /** Callbacks & overrides */
  onPageChange: PropTypes.func,
  renderImage: PropTypes.func,
  renderPagination: PropTypes.func,
  renderTitle: PropTypes.func,
};
