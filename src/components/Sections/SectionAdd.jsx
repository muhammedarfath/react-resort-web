import React from "react";
import banner from '../../assets/C8788.mp4'

function SectionAdd() {
  return (
    <div className="w-full container mx-auto object-contain mt-5">
      <video autoPlay loop muted id="video" className="rounded-md ">
        <source src={banner} />
      </video>
    </div>
  );
}

export default SectionAdd;
