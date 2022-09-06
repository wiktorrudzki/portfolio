import * as React from 'react';
import ContactDetails from '../components/contact-page/ContactDetails';
import ContactForm from '../components/contact-page/ContactForm';
import Layout from '../components/generals/Layout';

const Contact = () => {
    return (
        <Layout>
            <ContactDetails />
            <ContactForm />
        </Layout>
    )
}

export default Contact;
