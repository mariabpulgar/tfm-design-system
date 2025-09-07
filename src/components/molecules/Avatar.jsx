import React, { useMemo, useState, useEffect } from "react";
import "./Avatar.css";

/**
 * Props principales:
 *  - src?: string
 *  - name?: string
 *  - alt?: string
 *  - size: 'xxs'|'xs'|'s'|'m'|'l'|'xl'|'xxl' | number
 *  - loading?: boolean
 *  - fallback?: 'initials' | 'icon'
 *  - initials?: 'auto' | string
 *  - initialsCount?: 1 | 2
 *  - mode?: 'img' | 'bg'   // 'bg' pinta la imagen con background cover
 *  - className?: string
 */
export default function Avatar({
  src,
  name,
  alt,
  size = "m",
  loading = false,
  fallback = "initials",
  initials = "auto",
  initialsCount = 2,
  mode = "img",
  className = "",
  ...props
}) {
  const [hasError, setHasError] = useState(false);
  const [bgReady, setBgReady] = useState(false);

  // Pre-carga para detectar error cuando se usa mode='bg'
  useEffect(() => {
    if (mode !== "bg" || !src || loading) {
      setBgReady(false);
      return;
    }
    setHasError(false);
    setBgReady(false);
    const img = new Image();
    img.onload = () => setBgReady(true);
    img.onerror = () => setHasError(true);
    img.src = src;
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [mode, src, loading]);

  const sizeKey = useMemo(() => {
    if (typeof size === "number") return null;
    const k = String(size).toLowerCase();
    const allowed = new Set(["xxs", "xs", "s", "m", "l", "xl", "xxl"]);
    return allowed.has(k) ? k : "m";
  }, [size]);

  const styleInline = useMemo(() => {
    const s =
      typeof size === "number" ? { width: `${size}px`, height: `${size}px` } : {};
    // si estamos en modo background y la imagen ya está lista, pintamos el bg
    if (mode === "bg" && src && !loading && !hasError && bgReady) {
      return {
        ...s,
        backgroundImage: `url("${src}")`,
      };
    }
    return s;
  }, [size, mode, src, loading, hasError, bgReady]);

  const altText = alt || name || "Avatar";

  const initialsText = useMemo(() => {
    if (initials !== "auto") return initials || "";
    if (!name) return "";
    const cleaned = name
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const parts = cleaned.split(/\s+/).filter(Boolean);
    if (!parts.length) return "";
    const first = parts[0][0] || "";
    const second = parts[1]?.[0] || "";
    return (initialsCount === 1 ? first : first + second).toUpperCase();
  }, [name, initials, initialsCount]);

  const canShowImageTag = !!src && !hasError && !loading && mode === "img";
  const canShowBackground =
    !!src && !hasError && !loading && mode === "bg" && bgReady;

  const showInitials =
    !canShowImageTag && !canShowBackground && !loading && fallback === "initials" && initialsText;
  const showIcon =
    !canShowImageTag && !canShowBackground && !loading && (!showInitials || fallback === "icon");

  return (
    <div
      className={[
        "avatar",
        sizeKey ? `avatar--${sizeKey}` : "",
        loading ? "avatar--loading" : "",
        mode === "bg" && canShowBackground ? "avatar--bg" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={styleInline}
      title={name}
      aria-busy={loading ? "true" : "false"}
      // En modo background, aseguramos accesibilidad como imagen
      role={mode === "bg" && canShowBackground ? "img" : undefined}
      aria-label={mode === "bg" && canShowBackground ? altText : undefined}
      {...props}
    >
      {canShowImageTag ? (
        <img
          className="avatar__img"
          src={src}
          alt={altText}
          onError={() => setHasError(true)}
          loading="lazy"
          draggable="false"
        />
      ) : loading ? (
        <span className="avatar__skeleton" aria-hidden="true" />
      ) : showInitials ? (
        <span className="avatar__initials" role="img" aria-label={altText}>
          {initialsText}
        </span>
      ) : showIcon ? (
        <DefaultUserIcon className="avatar__icon" role="img" aria-label={altText} />
      ) : null}
    </div>
  );
}

function DefaultUserIcon({ className = "", ...rest }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path
        d="M12 12c2.761 0 5-2.462 5-5.5S14.761 1 12 1 7 3.462 7 6.5 9.239 12 12 12zm0 2c-4.418 0-8 3.134-8 7v1h16v-1c0-3.866-3.582-7-8-7z"
        fill="currentColor"
      />
    </svg>
  );
}
