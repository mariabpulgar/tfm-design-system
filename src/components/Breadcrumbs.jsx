import React from 'react';
import IconSelector from './IconSelector';
import './Breadcrumbs.css';

export default function Breadcrumbs({
  items = [],
  currentIndex,
  onNavigate,
  showHome = true,              
  separatorIcon = 'dropRightIcon',
  className = '',
}) {
  const lastIndex = items.length - 1;
  const activeIndex = typeof currentIndex === 'number' ? currentIndex : lastIndex;

  return (
    <nav className={['breadcrumbs', className].filter(Boolean).join(' ')} aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {showHome && (
          <>
            <li className="breadcrumb-item">
              {/* Home: href en onNavigate o con <a> */}
              <span className="breadcrumb-link breadcrumb-home" role="link" tabIndex={0}
                    onClick={() => onNavigate?.({ label: 'Home' }, -1)}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onNavigate?.({ label: 'Home' }, -1)}>
                <IconSelector name="homeIcon" size="medium" className="breadcrumb-icon" />
              </span>
            </li>

            {/* Separador después de Home si hay items */}
            {items.length > 0 && (
              <li className="breadcrumb-separator" aria-hidden="true">
                <IconSelector name={separatorIcon} size="small" className="breadcrumb-sep-icon" />
              </li>
            )}
          </>
        )}

        {items.map((item, index) => {
          const isCurrent = index === activeIndex;
          const isClickable = !!item.href || (!!onNavigate && !item.disabled && !isCurrent);

          return (
            <React.Fragment key={`${item.label}-${index}`}>
              <li
                className={[
                  'breadcrumb-item',
                  isCurrent ? 'is-current' : '',
                  item.disabled ? 'is-disabled' : '',
                ].join(' ').trim()}
                {...(isCurrent ? { 'aria-current': 'page' } : {})}
              >
                {isClickable ? (
                  <a
                    href={item.href || '#'}
                    className="breadcrumb-link"
                    onClick={(e) => {
                      if (!item.href) e.preventDefault();
                      onNavigate?.(item, index);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onNavigate?.(item, index);
                      }
                    }}
                    aria-disabled={item.disabled ? 'true' : undefined}
                    tabIndex={item.disabled ? -1 : 0}
                  >
                    {item.iconName && (
                      <IconSelector name={item.iconName} size="small" className="breadcrumb-icon" />
                    )}
                    <span className="breadcrumb-text">{item.label}</span>
                  </a>
                ) : (
                  <span className="breadcrumb-link">
                    {item.iconName && (
                      <IconSelector name={item.iconName} size="small" className="breadcrumb-icon" />
                    )}
                    <span className="breadcrumb-text">{item.label}</span>
                  </span>
                )}
              </li>

              {index < lastIndex && (
                <li className="breadcrumb-separator" aria-hidden="true">
                  <IconSelector name={separatorIcon} size="small" className="breadcrumb-sep-icon" />
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}