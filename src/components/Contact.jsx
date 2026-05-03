import "./contact.css";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal();

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-card reveal" ref={ref}>
        <p className="contact-text">
          Whether you have an opportunity, a question, or just want to connect — 
          my inbox is open.
        </p>
        <div className="contact-links">
          <a className="contact-btn" href="mailto:alexkurmiah38@gmail.com">Email Me</a>
          <a className="contact-btn" href="https://github.com/AlexKurmiah" target="_blank">GitHub</a>
          <a className="contact-btn" href="https://www.linkedin.com/in/alex-kurmiah/" target="_blank">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}