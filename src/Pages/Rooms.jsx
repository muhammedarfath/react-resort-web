import React from "react";
import imageone from "../assets/room1.jpg";
import imagetwo from "../assets/room2.jpg";
import imagethree from "../assets/room3.jpg";
import imagefour from "../assets/room4.jpg";
import imagefive from "../assets/room5.jpg";
import imagesix from "../assets/room6.jpg";
import imageseven from "../assets/room7.jpg";

function Rooms() {
  return (
    <div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={imageone} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={imagetwo} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={imagethree} alt="" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={imagefour} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={imagefive} alt="" />
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={imagesix} alt="" />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={imageseven} alt="" />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
