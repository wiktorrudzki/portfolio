import * as React from "react";

const ContactForm = () => {

  return (
    <section>
      <h2>Dane kontaktowe</h2>
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
