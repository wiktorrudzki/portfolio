import * as React from "react";
import { SetLanguage, ThemeContext } from "../generals/Layout";

const ContactForm = () => {
  const [darkMode] = React.useContext(ThemeContext);
  const [polish] = React.useContext(SetLanguage);

  //CONTACT-DETAILS STYLES

  const styles = darkMode ? {} : {};

  //CONTACT-DETAILS LANGUAGES

  const content = polish ? {} : {};

  return (
    <section>
      <h2>{content.h2}</h2>
      <form>
        <label>
            Imię
            <input type="text" name="name" required />
            
        </label>
        <label>
            Nazwisko
            <input type="text" name="surrname" required />

        </label>
        <label>
            Adres e-mail
            <input type="email" name="email" required />

        </label>
        <label>
            Numer telefonu
            <input type="number" name="phone-number" />

        </label>
        <label>
            Tytuł wiadomości
            <input type="text" name="title" required />

        </label>
        <label>
            Treść wiadomości
            <textarea name="message" />

        </label>
      </form>
    </section>
  );
};

export default ContactForm;
