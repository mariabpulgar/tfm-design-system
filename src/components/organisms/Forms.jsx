import React, { useMemo, useState } from 'react';
import InputText from '../atoms/InputText';
import TextArea from '../atoms/TextArea'; // Importar tu componente TextArea
import Button from '../molecules/Button';
import Dropdown from '../molecules/Dropdown'; 
import './Forms.css';

const DEFAULT_MAX = 250;

const emailRE = /.+@.+\..+/;
const numberRE = /^\d+([.,]\d+)?$/;

// ===== Contact =====
const FORMS = {
  contact: {
    title: 'Contacto',
    subtitle: 'Ponte en contacto con nosotros llenando este breve formulario.',
    submitText: 'Enviar',
    fields: [
      { name: 'fullName', label: 'Nombre completo *', placeholder: 'ej. Jane Doe', type: 'text', required: true, col: 12 },
      { name: 'email',    label: 'Email *',     placeholder: 'ej. jane@example.com', type: 'email', required: true, col: 6 },
      { name: 'phone',    label: 'Teléfono',       placeholder: 'ej. +57 123 456 7890', type: 'tel', col: 6 },
      { name: 'subject',  label: 'Asunto *',   placeholder: 'ej. Preguntas para donación', type: 'text', required: true, col: 12 },
      { name: 'message',  label: 'Mensaje *',   placeholder: 'Escribe tu mensaje aquí...', type: 'textarea', required: true, col: 12, max: DEFAULT_MAX, hint: 'Por favor ingresa una descripción' },
    ],
  },

  // === Adoption ===
  adoption: {
    title: 'Adopción',
    subtitle: '¿Listo para adoptar? Llena el formulario y conoce a tu nuevo mejor amigo.',
    submitText: 'Enviar',
    fields: [
      { name: 'fullName',  label: 'Nombre completo *', placeholder: 'ej. Jane Doe', type: 'text', required: true, col: 6 },
      { name: 'age',       label: 'Edad *',       placeholder: 'ej. 30',       type: 'text', required: true, numeric: true, col: 6 },
      { name: 'email',     label: 'Email *',     placeholder: 'ej. jane@example.com', type: 'email', required: true, col: 6 },
      { name: 'phone',     label: 'Teléfono',       placeholder: 'ej. +57 123 456 7890', type: 'tel', col: 6 },
      { name: 'city',      label: 'Ciudad *',      placeholder: 'Elegir', type: 'select', required: true, col: 12,
        options: [
          { id: 'med', label: 'Medellín' },
          { id: 'bog', label: 'Bogotá' },
          { id: 'cali', label: 'Cartagena' },
        ]
      },
      { name: 'living',    label: 'Tipo de vivienda *', placeholder: 'Elegir', type: 'select', required: true, col: 12,
        options: [
          { id: 'house', label: 'Apartamento' },
          { id: 'apt',   label: 'Casa con patio' },
          { id: 'farm',  label: 'Finca o lugar abierto' },
        ]
      },
      { name: 'message',   label: '¿Por qué quieres adoptar? *', placeholder: 'Escribe tu mensaje aquí...', type: 'textarea', required: true, col: 12, max: DEFAULT_MAX, hint: 'Por favor ingresa una descripción' },
    ],
  },

  // === Volunteer ===
  volunteer: {
    title: 'Voluntariado',
    subtitle: '¡Únete a nuestro equipo! Cuéntanos cómo te gustaría ayudar.',
    submitText: 'Enviar',
    fields: [
      { name: 'fullName',  label: 'Nombre completo *', placeholder: 'ej. Jane Doe', type: 'text', required: true, col: 6 },
      { name: 'age',       label: 'Edad *',       placeholder: 'ej. 30',       type: 'text', required: true, numeric: true, col: 6 },
      { name: 'email',     label: 'Email *',     placeholder: 'ej. jane@example.com', type: 'email', required: true, col: 6 },
      { name: 'phone',     label: 'Teléfono',       placeholder: 'ej. +57 123 456 7890', type: 'tel', col: 6 },
      { name: 'city',      label: 'Ciudad *',      placeholder: 'Elegir', type: 'select', required: true, col: 12,
        options: [
          { id: 'med', label: 'Medellín' },
          { id: 'bog', label: 'Bogotá' },
          { id: 'cali', label: 'Cali' },
        ]
      },
      { name: 'availability', label: 'Disponibilidad *', placeholder: 'Elegir', type: 'select', required: true, col: 12,
        options: [
          { id: 'wknds', label: 'Fines de semana' },
          { id: 'wkdays', label: 'Entre semana' },
          { id: 'flex', label: 'Flexible' },
        ]
      },
      { name: 'experience',   label: '¿Experiencia con animales? *', placeholder: 'ej. He ayudado en refugios antes', type: 'textarea', required: true, col: 12, max: DEFAULT_MAX, hint: 'Por favor ingresa una descripción' },
    ],
  },

  // === Donation ===
  donation: {
    title: 'Donación',
    subtitle: 'Tu apoyo nos ayuda a rescatar, alimentar y cuidar animales en necesidad.',
    submitText: 'Enviar',
    fields: [
      { name: 'fullName',  label: 'Nombre completo *', placeholder: 'ej. Jane Doe', type: 'text', required: true, col: 6 },
      { name: 'age',       label: 'Edad *',       placeholder: 'ej. 30',       type: 'text', required: true, numeric: true, col: 6 },
      { name: 'email',     label: 'Email *',     placeholder: 'ej. jane@example.com', type: 'email', required: true, col: 6 },
      { name: 'phone',     label: 'Teléfono',       placeholder: 'ej. +57 123 456 7890', type: 'tel', col: 6 },
      { name: 'amount',    label: 'Monto de donación', placeholder: 'ej. 50.000', type: 'text', numeric: true, col: 12 },
      { name: 'payment',   label: 'Método de pago *', placeholder: 'Elegir', type: 'select', required: true, col: 12,
        options: [
          { id: 'card',  label: 'Tarjeta de Crédito/Débito' },
          { id: 'paypal',label: 'PayPal' },
          { id: 'cash',  label: 'Efectivo' },
        ]
      },
      { name: 'message',   label: 'Mensaje adicional *', placeholder: 'ej. Me gusta ayudar a los animales', type: 'textarea', required: true, col: 12, max: DEFAULT_MAX, hint: 'Por favor ingresa una descripción' },
    ],
  },
};

const Forms = ({
  type = 'contact',
  schema,               
  title,                
  subtitle,
  submitText,
  onSubmit,
  initialValues = {},
}) => {
  const spec = useMemo(() => {
    const base = schema ?? FORMS[type] ?? { title: '', subtitle: '', submitText: 'Enviar', fields: [] };
    return {
      ...base,
      title: title ?? base.title,
      subtitle: subtitle ?? base.subtitle,
      submitText: submitText ?? base.submitText ?? 'Enviar',
    };
  }, [type, schema, title, subtitle, submitText]);

  const initVals = useMemo(() => {
    const v = {};
    for (const f of spec.fields) v[f.name] = initialValues[f.name] ?? '';
    return v;
  }, [spec, initialValues]);

  const [values, setValues] = useState(initVals);
  const [errors, setErrors] = useState({});

  const set = (name) => (eOrVal) => {
    const nextVal = typeof eOrVal === 'string' ? eOrVal : eOrVal?.target?.value ?? '';
    setValues((prev) => ({ ...prev, [name]: nextVal }));
  };

  const validate = () => {
    const e = {};
    for (const f of spec.fields) {
      const raw = values[f.name] ?? '';
      const val = (typeof raw === 'string' ? raw : String(raw)).trim();

      if (f.required && !val) {
        e[f.name] = 'Requerido';
        continue;
      }

      if (f.type === 'email' && val && !emailRE.test(val)) e[f.name] = 'Email inválido';
      if (f.numeric && val && !numberRE.test(val)) e[f.name] = 'Número inválido';
      if (f.max && val.length > f.max) e[f.name] = `Máximo ${f.max} caracteres`;
      if (f.min && val.length < f.min) e[f.name] = `Mínimo ${f.min} caracteres`;
    }
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) onSubmit?.(values);
  };

  // helper para mostrar label
  const findOptionLabel = (f, idOrLabel) => {
    if (!f?.options) return idOrLabel || '';
    const hit = f.options.find(opt => opt.id === idOrLabel) || f.options.find(opt => opt.label === idOrLabel);
    return hit?.label ?? idOrLabel ?? '';
  };

  return (
    <div className="forms-card">
      {(spec.title || spec.subtitle) && (
        <header className="forms-header">
          {spec.title && <h2 className="forms-title">{spec.title}</h2>}
          <hr className="forms-divider" />
          {spec.subtitle && <p className="forms-subtitle">{spec.subtitle}</p>}
        </header>
      )}

      <form className="forms-form" onSubmit={handleSubmit} noValidate>
        <div className="forms-grid">
          {spec.fields.map((f) => {
            const col = Math.min(Math.max(f.col ?? 12, 1), 12);

            // ---- Textarea usando tu componente personalizado ----
            if (f.type === 'textarea') {
              const val = values[f.name] ?? '';
              return (
                <div key={f.name} style={{ gridColumn: `span ${col}` }} className="forms-input">
                  <TextArea
                    id={f.name}
                    name={f.name}
                    label={f.label}
                    placeholder={f.placeholder}
                    value={val}
                    onChange={set(f.name)}
                    error={errors[f.name]}
                    maxLength={f.max}
                    rows={6}
                    className="forms-textarea"
                  />
                  <div className="forms-helper">
                    {f.hint && <span className="forms-hint">{f.hint}</span>}
                    {f.max && <span className="forms-counter">{val.length}/{f.max}</span>}
                  </div>
                </div>
              );
            }

            if (f.type === 'select') {
              const current = values[f.name];
              const label = findOptionLabel(f, current);
              return (
                <div key={f.name} style={{ gridColumn: `span ${col}` }} className="input-group forms-input forms-select">
                  {f.label && <label className="input-label">{f.label}</label>}

                  <Dropdown
                    inline
                    title={label || f.placeholder || 'Elegir'}
                    items={f.options || []}
                    onChange={(item) => set(f.name)(item?.id ?? item?.label ?? '')}
                  />

                  {errors[f.name] && <span className="input-error-message visible">{errors[f.name]}</span>}
                </div>
              );
            }

            return (
              <div key={f.name} style={{ gridColumn: `span ${col}` }}>
                <InputText
                  id={f.name}
                  name={f.name}
                  label={f.label}
                  placeholder={f.placeholder}
                  type={f.type ?? 'text'}
                  value={values[f.name] ?? ''}
                  onChange={set(f.name)}
                  error={errors[f.name]}
                  className="forms-input"
                />
              </div>
            );
          })}
        </div>

        <div className="forms-actions">
          <Button
            variant="btn-primary"
            size="large"
            type="submit"
            text={spec.submitText || 'Enviar'}
            showLeftIcon={false}
            showRightIcon={false}
            className="btn--block"
          />
        </div>
      </form>
    </div>
  );
};

export default Forms;