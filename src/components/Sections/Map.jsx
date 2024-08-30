import React from "react";

function Map() {
  return (
    <div className="relative w-full h-96">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d752.6896420916416!2d76.3168026767568!3d9.497844640217407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0884537c78be25%3A0x215ca9bb5144fcc8!2sVijay%20Park!5e1!3m2!1sen!2sin!4v1725003283848!5m2!1sen!2sin"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
}

export default Map;
