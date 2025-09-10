import React, { useState, useRef, useEffect } from 'react';
import Rectangle982 from '../../assets/Rectangle982.svg?url';
import Vector148 from '../../assets/Vector148.svg?url';
import Button from '../molecules/Button';
import IconSelector from '../atoms/IconSelector';
import './NavBar.css';
import { Link, useNavigate } from 'react-router-dom';

function NavBar({
  imageSrc = Rectangle982,
  vectorSrc = Vector148,
}) {
  const navigate = useNavigate();

  // Estado y refs para el submenú "Adopción"
  const [isAdopcionOpen, setIsAdopcionOpen] = useState(false);
  const adopcionWrapRef = useRef(null);
  const firstItemRef = useRef(null);
  const adopcionMenuId = 'submenu-adopcion';

  // Cerrar al hacer clic fuera o presionar Escape
  useEffect(() => {
    const onDocClick = (e) => {
      if (!isAdopcionOpen) return;
      if (adopcionWrapRef.current && !adopcionWrapRef.current.contains(e.target)) {
        setIsAdopcionOpen(false);
      }
    };
    const onKey = (e) => {
      if (!isAdopcionOpen) return;
      if (e.key === 'Escape') setIsAdopcionOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [isAdopcionOpen]);

  // Toggle del submenú y foco en el primer ítem al abrir
  const handleAdopcionClick = () => {
    setIsAdopcionOpen((open) => {
      const next = !open;
      if (next) setTimeout(() => firstItemRef.current?.focus(), 0);
      return next;
    });
  };

  // Cierra el submenú al navegar
  const closeSubmenu = () => setIsAdopcionOpen(false);

  return (
    <div className="nav-bar-container">
      <div className="nav-bar" role="navigation" aria-label="Main">
        <div className="navbar-img">
          <Link to="/">
            <img src={imageSrc} alt="Logo" fetchPriority="high" />
          </Link>
        </div>

        <div className="navbar-items">
          {/* Enlaces placeholder: ajústalos cuando tengas rutas */}
          <a href="#">Quiénes somos</a>

          <div className="vector-divider">
            <img src={vectorSrc} alt="" aria-hidden="true" role="presentation" />
          </div>

          <a href="#">Ubicación</a>

          <div className="vector-divider">
            <img src={vectorSrc} alt="" aria-hidden="true" role="presentation" />
          </div>

          {/* Botón que abre el submenú de Adopción */}
          <div className="adopcion-wrap" ref={adopcionWrapRef}>
            <Button
              iconColor="currentColor"
              iconPosition="left"
              iconSize="medium"
              leftIconName="dropLeftIcon"
              onClick={handleAdopcionClick}
              rightIconName="dropDownIcon"
              showLeftIcon={false}
              showRightIcon
              size="large"
              text="Adopción"
              type="button"
              variant="btn-text"
              aria-haspopup="menu"
              aria-expanded={isAdopcionOpen}
              aria-controls={adopcionMenuId}
            />

            <ul
              id={adopcionMenuId}
              role="menu"
              className={`submenu ${isAdopcionOpen ? 'is-open' : ''}`}
              hidden={!isAdopcionOpen}
            >
              <li role="none" className="submenu-li">
                <Link
                  ref={firstItemRef}
                  role="menuitem"
                  to="/adopciones"
                  tabIndex={isAdopcionOpen ? 0 : -1}
                  onClick={closeSubmenu}
                >
                  Perritos
                </Link>
                <IconSelector color="var(--blue-normal)" name="dropRightIcon" size="medium" />
              </li>

              <li role="none" className="submenu-li">
                <Link
                  role="menuitem"
                  to="/adopciones"
                  tabIndex={isAdopcionOpen ? 0 : -1}
                  onClick={closeSubmenu}
                >
                  Gaticos
                </Link>
                <IconSelector color="var(--blue-normal)" name="dropRightIcon" size="medium" />
              </li>

              <li role="none" className="submenu-li">
                <Link
                  role="menuitem"
                  to="/adopciones"
                  tabIndex={isAdopcionOpen ? 0 : -1}
                  onClick={closeSubmenu}
                >
                  Proceso
                </Link>
                <IconSelector color="var(--blue-normal)" name="dropRightIcon" size="medium" />
              </li>
            </ul>
          </div>

          {/* Botón Donación -> navega a /Donation */}
          <Button
            text="Donación"
            iconSide="left"
            showLeftIcon
            showRightIcon={false}
            leftIconName="sendIcon"
            iconSize="medium"
            iconColor="currentColor"
            type="button"
            variant="btn-primary"
            size="large"
            onClick={() => navigate('/donation')}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
