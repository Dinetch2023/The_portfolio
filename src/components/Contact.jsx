import React, { useState } from "react";
import "./Contact.css"; // Importez votre fichier CSS

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour envoyer le message
    console.log(formData);
    // Réinitialisez le formulaire après l'envoi
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div name="contact" className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <p className="contact-title">Contact</p>
          <p className="contact-description">Envoyez-moi un message</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="contact-input"
            type="text"
            placeholder="Nom"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="contact-input"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="contact-textarea"
            name="message"
            rows="10"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-button">
            Collaborons ensemble
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
