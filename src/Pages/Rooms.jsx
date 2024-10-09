import React, { useState } from "react";
import imageone from "../assets/room1.jpg";
import imagetwo from "../assets/room2.jpg";
import imagethree from "../assets/room3.jpg";
import imagefour from "../assets/room4.jpg";
import imagefive from "../assets/room5.jpg";
import imagesix from "../assets/room6.jpg";
import imageseven from "../assets/room7.jpg";
import imageseight from "../assets/prm.jpg";
import imagesnain from "../assets/Traditional-House-Interior-AI.jpg";
import { LiaBathSolid } from "react-icons/lia";
import { RiUserFollowLine } from "react-icons/ri";
import RoomModal from '../components/Modal/RoomModal'
const rooms = [
  {
    id: 1,
    images: [imagetwo],
    name: "Super Deluxe",
    roomName:"Leo",
    people: 2,
    bathrooms: 1,
    rate: "₹3500",
    basePrice: 3000,
    taxesAndFees: 500,
    totalPrice: 3500,
    description: [
      "Luxurious Super Deluxe room",
      "Comfort and elegance",
      "Perfect for a relaxing stay",
    ],
  },
  {
    id: 2,
    images: [imagethree],
    name: "Super Deluxe",
    roomName:"Jolly",
    people: 2,
    bathrooms: 1,
    rate: "₹3500",
    basePrice: 3000,
    taxesAndFees: 500,
    totalPrice: 3500,
    description: [
      "Combines sophistication and comfort",
      "Exquisite stay experience",
    ],
  },
  {
    id: 3,
    images: [imagefive],
    name: "Deluxe",
    roomName:"Owner",
    people: 2,
    bathrooms: 1,
    rate: "₹2500",
    basePrice: 2200,
    taxesAndFees: 300,
    totalPrice: 2500,
    description: ["Cozy and inviting atmosphere", "Ideal for a pleasant stay"],
  },
  {
    id: 4,
    images: [imageone],
    name: "Deluxe",
    roomName:"Rukma",
    people: 2,
    bathrooms: 1,
    rate: "₹2500",
    basePrice: 2200,
    taxesAndFees: 300,
    totalPrice: 2500,
    description: ["Comfort and tranquility", "Restful experience"],
  },
  {
    id: 5,
    images: [imageseight],
    name: "Premium Suite",
    roomName:"MD",
    people: 2,
    bathrooms: 1,
    rate: "₹3000",
    basePrice: 2700,
    taxesAndFees: 300,
    totalPrice: 3000,
    description: ["Luxurious and spacious", "Perfect for an indulgent stay"],
  },
  {
    id: 6,
    images: [imagesix],
    name: "Premium Suite",
    roomName:"VIP",
    people: 2,
    bathrooms: 1,
    rate: "₹3000",
    basePrice: 2700,
    taxesAndFees: 300,
    totalPrice: 3000,
    description: [
      "Designed for ultimate comfort and luxury",
      "Ensures an exclusive stay",
    ],
  },
  {
    id: 7,
    images: [imagesnain],
    name: "Sky Suite",
    roomName:"Board Room",
    people: 3,
    bathrooms: 1,
    rate: "₹3500",
    basePrice: 1200,
    taxesAndFees: 300,
    totalPrice: 1500,
    description: [
      "Ideal for meetings and conferences",
      "Professional and well-equipped space",
    ],
  },
];

function Rooms() {
  return (
    <div className="container mx-auto font-sans mt-36 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="border rounded-lg overflow-hidden shadow-md bg-white"
          >
            <img
              className="w-full h-48 object-cover"
              src={room.images[0]}
              alt={room.name}
            />
            <div className="p-4 flex flex-col gap-4">
              <div className="flex justify-between">
                <h3 className="text-xl font-bold">{room.name}</h3>
                <p className="text-black font-sans text-lg">{room.rate}</p>
              </div>
              <div className="flex gap-8">
                <div className="flex items-center gap-2">
                  <RiUserFollowLine className="text-xl" />
                  <p className="text-md font-sans">{room.people} GUESTS</p>
                </div>
                <div className="flex items-center gap-2">
                  <LiaBathSolid className="text-xl" />
                  <p className="text-md font-sans">{room.bathrooms} Baths</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-md">
                {room.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
                <RoomModal room={room}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
