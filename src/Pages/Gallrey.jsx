import React from "react";
import galler1 from "../assets/pool.png";
import entry from "../assets/entry.jpg";
import wash from "../assets/wash.jpg";
import flat from "../assets/flat.jpg";
import top from "../assets/topview.jpg";
import bath from "../assets/bathroom.jpg";
import board from "../assets/board.jpg";
import res from "../assets/res.jpg";
import roomy from "../assets/roomy.jpeg";
import bath2 from "../assets/bath2.jpg";
import sea from "../assets/seavoew.jpg";
import food from "../assets/haal.jpg";
import hmr from "../assets/honeymoon.jpg";
import img from "../assets/entry1.jpg";
import uniqtwo from "../assets/uniq4.jpg";
import room from "../assets/WhatsApp Image 2024-09-25 at 11.22.01.jpeg";
import far from "../assets/WhatsApp Image 2024-09-25 at 11.21.58.jpeg";
import room2 from "../assets/WhatsApp Image 2024-09-24 at 19.45.23.jpeg";
import bath3 from "../assets/WhatsApp Image 2024-09-24 at 19.45.23 (2).jpeg";
import nightview from "../assets/WhatsApp Image 2024-10-04 at 18.53.55.jpeg";

function Gallrey() {
  return (
    <>
      <div className="h-full bg-white w-full overflow-x-hidden">
        <div className="columns-2 xl:columns-4 p-4 gap-4 space-y-4">
          <img src={galler1} alt="" className="gallery-img" />
          <img src={room} alt="" className="gallery-img" />
          <img src={far} alt="" className="gallery-img" />
          <img src={room2} alt="" className="gallery-img" />
          <img src={bath3} alt="" className="gallery-img" />
          <img src={nightview} alt="" className="gallery-img" />
          <img src={entry} alt="" className="gallery-img" />
          <img src={uniqtwo} alt="" className="gallery-img" />
          <img src={wash} alt="" className="gallery-img" />
          <img src={top} alt="" className="gallery-img" />
          <img src={bath} alt="" className="gallery-img" />
          <img src={flat} alt="" className="gallery-img" />
          <img src={board} alt="" className="gallery-img" />
          <img src={res} alt="" className="gallery-img" />
          <img src={roomy} alt="" className="gallery-img" />
          <img src={img} alt="" className="gallery-img" />
          <img src={bath2} alt="" className="gallery-img" />
          <img src={sea} alt="" className="gallery-img" />
          <img src={food} alt="" className="gallery-img" />
          <img src={hmr} alt="" className="gallery-img" />
        </div>
      </div>
    </>
  );
}

export default Gallrey;
