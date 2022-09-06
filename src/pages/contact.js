import * as React from "react";
import ContactDetails from "../components/contact-page/ContactDetails";
import ContactForm from "../components/contact-page/ContactForm";
import Layout from "../components/generals/Layout";
import { layoutContact } from "../styles/contact.module.css";

const Contact = () => {
  return (
    <Layout>
      <section className={layoutContact}>
        <ContactDetails />
        <ContactForm />
      </section>
    </Layout>
  );
};

export default Contact;
