// Forms.stories.jsx
import React from "react";
import Forms from "../components/organisms/Forms";
import '../App.css'

export default {
  title: "Organisms/Forms",
  component: Forms,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
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
      phone: "+1 202 555 0147",
      subject: "Question about donations",
      message: "Hello! I'd like to know more about monthly donations.",
    },
  },
  parameters: {
    docs: {
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
        phone: "+1 202 555 0147",
        subject: "Question about donations",
        message: "Hello! I'd like to know more about monthly donations.",
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
    title: "Adoption",
    subtitle: "Fill the form and meet your new best friend.",
    submitText: "Send",
    initialValues: {
      fullName: "John Smith",
      age: "29",
      email: "john@domain.com",
      phone: "+57 300 000 0000",
      city: "bog",   // id o label
      living: "apt", // id o label
      message:
        "I live in an apartment, I love dogs and I have experience.",
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
import Forms from "../components/Forms";

export default function Example() {
  return (
    <Forms
      type="adoption"
      schema={undefined}
      title="Adoption"
      subtitle="Fill the form and meet your new best friend."
      submitText="Send"
      onSubmit={(v) => console.log("Adoption:", v)}
      initialValues={{
        fullName: "John Smith",
        age: "29",
        email: "john@domain.com",
        phone: "+57 300 000 0000",
        city: "bog",
        living: "apt",
        message: "I live in an apartment, I love dogs and I have experience.",
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
      fullName: "Ana María",
      age: "32",
      email: "ana@example.com",
      phone: "+57 311 111 1111",
      city: "med",
      availability: "wknds",
      experience: "I helped at local shelters during weekends.",
    },
  },
  parameters: {
    docs: {
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
        fullName: "Ana María",
        age: "32",
        email: "ana@example.com",
        phone: "+57 311 111 1111",
        city: "med",
        availability: "wknds",
        experience: "I helped at local shelters during weekends.",
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
    title: "Donation",
    subtitle: "Your support helps us rescue and care for animals.",
    submitText: "Donate",
    initialValues: {
      fullName: "Chris Doe",
      age: "30",
      email: "chris@example.com",
      phone: "",
      amount: "50.000",
      payment: "paypal",
      message: "Please use this donation for medical care.",
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
import Forms from "../components/Forms";

export default function Example() {
  return (
    <Forms
      type="donation"
      schema={undefined}
      title="Donation"
      subtitle="Your support helps us rescue and care for animals."
      submitText="Donate"
      onSubmit={(v) => console.log("Donation:", v)}
      initialValues={{
        fullName: "Chris Doe",
        age: "30",
        email: "chris@example.com",
        phone: "",
        amount: "50.000",
        payment: "paypal",
        message: "Please use this donation for medical care.",
      }}
    />
  );
}
`.trim(),
      },
    },
  },
};