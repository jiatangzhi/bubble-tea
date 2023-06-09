import React from "react";

export default function MapEmbed() {
  return (
    <div className="MapEmbed center-content">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9933.652572923034!2d-0.2183472!3d51.505636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fdb69955e4b%3A0x32a57336046eb306!2sT4!5e0!3m2!1sen!2suk!4v1686271249619!5m2!1sen!2suk"
        className="MapEmbed"
        title="T4 Google Map"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
