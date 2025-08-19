import React from "react";
import "./map.css";

const Map = () => {
  return (
    <div className="map-wrapper">
      <iframe
        title="Kingsukh Guest House Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.854086716808!2d86.8597904!3d23.5863324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
