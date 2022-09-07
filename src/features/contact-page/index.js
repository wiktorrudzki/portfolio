import * as React from "react";

import ContactDetails from "./sections/ContactDetails";
import ContactForm from "./sections/ContactForm";

import { layoutContact } from "./styles/contact.module.css";

const Contact = () => {
  return (
    <section className={layoutContact}>
      <ContactDetails />
      <ContactForm />
    </section>
  );
};

export default Contact;
