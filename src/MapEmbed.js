import React from "react";

export default function MapEmbed() {
  return (
    <div className="MapEmbed center-content">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.3575063530325!2d-0.009001623392835716!3d51.5433431718215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d6386488089%3A0xfb13953204fd3a7a!2sT4%20(Tea%20For%20You)!5e0!3m2!1sen!2ses!4v1685576776819!5m2!1sen!2ses"
        className="MapEmbed"
        title="T4 You"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
