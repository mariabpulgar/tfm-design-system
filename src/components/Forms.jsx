import React, { useMemo, useState } from 'react';
import InputText from './InputText';
import Button from './Button';
import Dropdown from './Dropdown'; 
import './Forms.css';

const DEFAULT_MAX = 250;

const emailRE = /.+@.+\..+/;
const numberRE = /^\d+([.,]\d+)?$/;

// ===== Contact =====
const FORMS = {
  contact: {
    title: 'Contact',
    subtitle: 'Get in touch with us by filling out this short form.',
    submitText: 'Send',
    fields: [
      { name: 'fullName', label: 'Nombre completo *', placeholder: 'e.g. Jane Doe', type: 'text', required: true, col: 12 },
      { name: 'email',    label: 'Email *',     placeholder: 'e.g. jane@example.com', type: 'email', required: true, col: 6 },
      { name: 'phone',    label: 'Teléfono',       placeholder: 'e.g. +1 123 456 7890', type: 'tel', col: 6 },
      { name: 'subject',  label: 'Asunto *',   placeholder: 'e.g. Preguntas para donación', type: 'text', required: true, col: 12 },
      { name: 'message',  label: 'Mensaje *',   placeholder: 'Escribe tu mensaje aquí...', type: 'textarea', required: true, col: 12, max: DEFAULT_MAX, hint: 'Please enter a guide description' },
    ],
  },

  // === Adoption ===
  adoption: {
    title: 'Adoption',
    subtitle: 'Ready to adopt? Fill out the form and meet your new best friend.',
    submitText: 'Send',
    fields: [
      { name: 'fullName',  label: 'Nombre completo *', placeholder: 'e.g. Jane Doe', type: 'text', required: true, col: 6 },
      { name: 'age',       label: 'Edad *',       placeholder: 'e.g. 30',       type: 'text', required: true, numeric: true, col: 6 },
      { name: 'email',     label: 'Email *',     placeholder: 'e.g. jane@example.com', type: 'email', required: true, col: 6 },
      { name: 'phone',     label: 'Teléfono',       placeholder: 'e.g. +1 123 456 7890', type: 'tel', col: 6 },
      { name: 'city',      label: 'Ciudad *',      placeholder: 'Choose', type: 'select', required: true, col: 12,
        options: [
          { id: 'med', label: 'Medellín' },
          { id: 'bog', label: 'Bogotá' },
          { id: 'cali', label: 'Cartagena' },
        ]
      },
      { name: 'living',    label: 'Tipo de vivienda *', placeholder: 'Choose', type: 'select', required: true, col: 12,
        options: [
          { id: 'house', label: 'Apartamento' },
          { id: 'apt',   label: 'Casa con patio' },
          { id: 'farm',  label: 'Finca o lugar abierto' },
        ]
      },
      { name: 'message',   label: 'Why do you want to adopt? *', placeholder: 'Type your message here...', type: 'textarea', required: true, col: 12, max: DEFAULT_MAX, hint: 'Please enter a guide description' },
    ],
  },

  // === Volunteer ===
  volunteer: {
    title: 'Volunteer',
    subtitle: "Join our team! Tell us how you'd like to help.",
    submitText: 'Send',
    fields: [
      { name: 'fullName',  label: 'Full name *', placeholder: 'e.g. Jane Doe', type: 'text', required: true, col: 6 },
      { name: 'age',       label: 'Age *',       placeholder: 'e.g. 30',       type: 'text', required: true, numeric: true, col: 6 },
      { name: 'email',     label: 'Email *',     placeholder: 'e.g. jane@example.com', type: 'email', required: true, col: 6 },
      { name: 'phone',     label: 'Phone',       placeholder: 'e.g. +1 123 456 7890', type: 'tel', col: 6 },
      { name: 'city',      label: 'City *',      placeholder: 'Choose', type: 'select', required: true, col: 12,
        options: [
          { id: 'med', label: 'Medellín' },
          { id: 'bog', label: 'Bogotá' },
          { id: 'cali', label: 'Cali' },
        ]
      },
      { name: 'availability', label: 'Availability *', placeholder: 'Choose', type: 'select', required: true, col: 12,
        options: [
          { id: 'wknds', label: 'Weekends' },
          { id: 'wkdays', label: 'Weekdays' },
          { id: 'flex', label: 'Flexible' },
        ]
      },
      { name: 'experience',   label: 'Experience with animals? *', placeholder: "e.g. I've helped at shelters before", type: 'textarea', required: true, col: 12, max: DEFAULT_MAX, hint: 'Please enter a guide description' },
    ],
  },

  // === Donation ===
  donation: {
    title: 'Donation',
    subtitle: 'Your support helps us rescue, feed, and care for animals in need.',
    submitText: 'Send',
    fields: [
      { name: 'fullName',  label: 'Full name *', placeholder: 'e.g. Jane Doe', type: 'text', required: true, col: 6 },
      { name: 'age',       label: 'Age *',       placeholder: 'e.g. 30',       type: 'text', required: true, numeric: true, col: 6 },
      { name: 'email',     label: 'Email *',     placeholder: 'e.g. jane@example.com', type: 'email', required: true, col: 6 },
      { name: 'phone',     label: 'Phone',       placeholder: 'e.g. +1 123 456 7890', type: 'tel', col: 6 },
      { name: 'amount',    label: 'Donation amount', placeholder: 'e.g. 50.000', type: 'text', numeric: true, col: 12 },
      { name: 'payment',   label: 'Payment method *', placeholder: 'Choose', type: 'select', required: true, col: 12,
        options: [
          { id: 'card',  label: 'Credit/Debit Card' },
          { id: 'paypal',label: 'PayPal' },
          { id: 'cash',  label: 'Cash' },
        ]
      },
      { name: 'message',   label: 'Additional Message *', placeholder: "e.g. I've helped at shelters before", type: 'textarea', required: true, col: 12, max: DEFAULT_MAX, hint: 'Please enter a guide description' },
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
    const base = schema ?? FORMS[type] ?? { title: '', subtitle: '', submitText: 'Submit', fields: [] };
    return {
      ...base,
      title: title ?? base.title,
      subtitle: subtitle ?? base.subtitle,
      submitText: submitText ?? base.submitText ?? 'Submit',
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
        e[f.name] = 'Required';
        continue;
      }

      if (f.type === 'email' && val && !emailRE.test(val)) e[f.name] = 'Invalid email';
      if (f.numeric && val && !numberRE.test(val)) e[f.name] = 'Invalid number';
      if (f.max && val.length > f.max) e[f.name] = `Max ${f.max} characters`;
      if (f.min && val.length < f.min) e[f.name] = `Min ${f.min} characters`;
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
            const hasError = Boolean(errors[f.name]);

            // ---- Textarea ----
            if (f.type === 'textarea') {
              const val = values[f.name] ?? '';
              return (
                <div key={f.name} style={{ gridColumn: `span ${col}` }} className="input-group forms-input">
                  {f.label && <label htmlFor={f.name} className="input-label">{f.label}</label>}
                  <textarea
                    id={f.name}
                    name={f.name}
                    className={`input-text forms-textarea ${hasError ? 'error' : ''}`}
                    placeholder={f.placeholder}
                    value={val}
                    onChange={set(f.name)}
                    maxLength={f.max}
                    rows={6}
                  />
                  {hasError && <span className="input-error-message visible">{errors[f.name]}</span>}
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
                    title={label || f.placeholder || 'Choose'}
                    items={f.options || []}
                    onChange={(item) => set(f.name)(item?.id ?? item?.label ?? '')}
                  />

                  {hasError && <span className="input-error-message visible">{errors[f.name]}</span>}
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
            text={spec.submitText || 'Submit'}
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