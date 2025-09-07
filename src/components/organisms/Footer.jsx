import React from "react";
import "./Footer.css";
import IconSelector from "../atoms/IconSelector";

const Footer = ({
  className = "",
  title = "Tittle page",
  navLinks = [
    { label: "Link item", href: "#" },
    { label: "Link item", href: "#" },
    { label: "Link item", href: "#" },
  ],
  utilityLinks = [
    { label: "Contact us", href: "#" },
    { label: "Feedback", href: "#" },
  ],
  socials = [
    { name: "instagramAIcon", label: "Instagram", href: "#" },
    { name: "whatsappAIcon", label: "WhatsApp", href: "#" },
    { name: "facebookAIcon", label: "Facebook", href: "#" },
    { name: "tiktokAIcon", label: "TikTok", href: "#" },
  ],
  logo = { src: "", alt: "Logo" },
  year = new Date().getFullYear(),
  backToTop = { label: "Back to top", href: "#top", icon: "topIcon" },
}) => {
  return (
    <footer className={`footer ${className}`} aria-labelledby="footer-title">
      {/* Banda superior */}
      <div className="footer__band footer__band--top">
        <div className="footer__container">
          <h2 id="footer-title" className="footer__title">
            {title}
          </h2>
          <nav className="footer__nav" aria-label="Footer primary">
            <ul className="footer__nav-list">
              {navLinks.map((link, i) => (
                <li key={i} className="footer__nav-item">
                  <a className="footer__link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Banda media */}
      <div className="footer__band footer__band--middle">
        <div className="footer__container footer__container--middle">
          <nav className="footer__utility" aria-label="Footer utility">
            <ul className="footer__utility-list">
              {utilityLinks.map((link, i) => (
                <li key={i} className="footer__utility-item">
                  <a className="footer__link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="footer__social" aria-label="Redes sociales">
            {socials.map((s, i) => (
              <li key={i} className="footer__social-item">
                <a
                  className="footer__social-button"
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                >
                  <IconSelector name={s.name} size="display" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Banda inferior */}
      <div className="footer__band footer__band--bottom">
        <div className="footer__container footer__container--bottom">
          <div className="footer__brand">
            <div className="footer__logo-box" aria-hidden={logo?.src ? "false" : "true"}>
              {logo?.src ? (
                <img className="footer__logo" src={logo.src} alt={logo.alt || "Logo"} />
              ) : (
                <div className="footer__logo--placeholder" />
              )}
            </div>
            <p className="footer__copy">
              Copyright {year} • All rights reserved
            </p>
          </div>

          <a className="footer__back" href={backToTop.href}>
            <span className="footer__back-text">{backToTop.label}</span>
            <IconSelector name={backToTop.icon} size="small" className="footer__back-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;