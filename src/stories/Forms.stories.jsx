// Forms.stories.jsx
import React from "react";
import Forms from "../components/organisms/Forms";
import '../App.css'

export default {
  title: "Organisms/Forms",
  component: Forms,
  tags: ["autodocs"],
  parameters: { 
    layout: "centered",
    docs: {
      description: {
        component: "Componente de formularios dinámicos que maneja diferentes tipos de formularios (contacto, adopción, voluntariado y donación) con validación integrada y diseño responsive."
      }
    }
  },
};

export const Contact = {
  args: {
    type: "contact",
    onSubmit: (values) => console.log("Contact:", values),
    // puedes sobreescribir estos en Controls si quieres
    schema: undefined,
    title: undefined,
    subtitle: undefined,
    submitText: undefined,
    initialValues: {
      fullName: "Jane Doe",
      email: "jane@example.com",
      phone: "+57 300 555 0147",
      subject: "Preguntas sobre donaciones",
      message: "¡Hola! Me gustaría saber más sobre las donaciones mensuales.",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Formulario de contacto básico para que los usuarios se comuniquen con la organización. Incluye campos para nombre, email, teléfono, asunto y mensaje."
      },
      source: {
        code: `
import Forms from "../components/Forms";

export default function Example() {
  return (
    <Forms
      type="contact"
      schema={undefined}
      title={undefined}
      subtitle={undefined}
      submitText={undefined}
      onSubmit={(values) => console.log("Contact:", values)}
      initialValues={{
        fullName: "Jane Doe",
        email: "jane@example.com",
        phone: "+57 300 555 0147",
        subject: "Preguntas sobre donaciones",
        message: "¡Hola! Me gustaría saber más sobre las donaciones mensuales.",
      }}
    />
  );
}
`.trim(),
      },
    },
  },
};

export const Adoption = {
  args: {
    type: "adoption",
    onSubmit: (v) => console.log("Adoption:", v),
    schema: undefined,
    title: "Adopción",
    subtitle: "Llena el formulario y conoce a tu nuevo mejor amigo.",
    submitText: "Enviar",
    initialValues: {
      fullName: "Juan Pérez",
      age: "29",
      email: "juan@dominio.com",
      phone: "+57 300 000 0000",
      city: "bog",   // id o label
      living: "apt", // id o label
      message:
        "Vivo en un apartamento, amo a los perros y tengo experiencia cuidándolos.",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Formulario de adopción que recopila información personal del adoptante, su situación de vivienda y motivación para adoptar una mascota."
      },
      source: {
        code: `
import Forms from "../components/Forms";

export default function Example() {
  return (
    <Forms
      type="adoption"
      schema={undefined}
      title="Adopción"
      subtitle="Llena el formulario y conoce a tu nuevo mejor amigo."
      submitText="Enviar"
      onSubmit={(v) => console.log("Adoption:", v)}
      initialValues={{
        fullName: "Juan Pérez",
        age: "29",
        email: "juan@dominio.com",
        phone: "+57 300 000 0000",
        city: "bog",
        living: "apt",
        message: "Vivo en un apartamento, amo a los perros y tengo experiencia cuidándolos.",
      }}
    />
  );
}
`.trim(),
      },
    },
  },
};

export const Volunteer = {
  args: {
    type: "volunteer",
    onSubmit: (v) => console.log("Volunteer:", v),
    schema: undefined,
    title: undefined,
    subtitle: undefined,
    submitText: undefined,
    initialValues: {
      fullName: "Ana María García",
      age: "32",
      email: "ana@example.com",
      phone: "+57 311 111 1111",
      city: "med",
      availability: "wknds",
      experience: "He ayudado en refugios locales durante los fines de semana y tengo experiencia con perros y gatos.",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Formulario de voluntariado para personas interesadas en ayudar a la organización. Incluye información sobre disponibilidad y experiencia previa con animales."
      },
      source: {
        code: `
import Forms from "../components/Forms";

export default function Example() {
  return (
    <Forms
      type="volunteer"
      schema={undefined}
      title={undefined}
      subtitle={undefined}
      submitText={undefined}
      onSubmit={(v) => console.log("Volunteer:", v)}
      initialValues={{
        fullName: "Ana María García",
        age: "32",
        email: "ana@example.com",
        phone: "+57 311 111 1111",
        city: "med",
        availability: "wknds",
        experience: "He ayudado en refugios locales durante los fines de semana y tengo experiencia con perros y gatos.",
      }}
    />
  );
}
`.trim(),
      },
    },
  },
};

export const Donation = {
  args: {
    type: "donation",
    onSubmit: (v) => console.log("Donation:", v),
    schema: undefined,
    title: "Donación",
    subtitle: "Tu apoyo nos ayuda a rescatar y cuidar animales en necesidad.",
    submitText: "Donar",
    initialValues: {
      fullName: "Carlos Rodríguez",
      age: "30",
      email: "carlos@example.com",
      phone: "",
      amount: "50.000",
      payment: "paypal",
      message: "Por favor usen esta donación para cuidados médicos de los animales.",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Formulario de donación que permite a los usuarios contribuir económicamente con la organización, especificando el monto y método de pago preferido."
      },
      source: {
        code: `
import Forms from "../components/Forms";

export default function Example() {
  return (
    <Forms
      type="donation"
      schema={undefined}
      title="Donación"
      subtitle="Tu apoyo nos ayuda a rescatar y cuidar animales en necesidad."
      submitText="Donar"
      onSubmit={(v) => console.log("Donation:", v)}
      initialValues={{
        fullName: "Carlos Rodríguez",
        age: "30",
        email: "carlos@example.com",
        phone: "",
        amount: "50.000",
        payment: "paypal",
        message: "Por favor usen esta donación para cuidados médicos de los animales.",
      }}
    />
  );
}
`.trim(),
      },
    },
  },
};