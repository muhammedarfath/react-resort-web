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
import Modal from "../components/Modal/Modal";
import { LiaBathSolid } from "react-icons/lia";
import { RiUserFollowLine } from "react-icons/ri";
import { RiMailSendLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";

const rooms = [
  {
    id: 1,
    image: imagetwo,
    name: "Super Deluxe",
    people: 2,
    bathrooms: 1,
    rate: "₹3500",
    description:
      "A luxurious Super Deluxe room, offering comfort and elegance, perfect for a relaxing stay.",
  },
  {
    id: 2,
    image: imagethree,
    name: "Super Deluxe",
    people: 2,
    bathrooms: 1,
    rate: "₹3500",
    description:
      "The Leo XIII Super Deluxe room combines sophistication and comfort for an exquisite stay.",
  },
  {
    id: 3,
    image: imagefive,
    name: "Deluxe",
    people: 2,
    bathrooms: 1,
    rate: "₹2500",
    description:
      "The Rukma Deluxe room offers a cozy and inviting atmosphere, ideal for a pleasant stay.",
  },
  {
    id: 4,
    image: imageone,
    name: "Deluxe",
    people: 2,
    bathrooms: 1,
    rate: "₹2500",
    description:
      "The Owner Deluxe room provides comfort and a tranquil environment for a restful experience.",
  },
  {
    id: 5,
    image: imageseight,
    name: "Premium Suite",
    people: 2,
    bathrooms: 1,
    rate: "₹3000",
    description:
      "Our MD Premium Suite offers a luxurious and spacious setting, perfect for an indulgent stay.",
  },
  {
    id: 6,
    image: imagesix,
    name: "Premium Suite",
    people: 2,
    bathrooms: 1,
    rate: "₹3000",
    description:
      "The VIP Premium Suite is designed for ultimate comfort and luxury, ensuring an exclusive stay.",
  },
  {
    id: 7,
    image: imagesnain,
    name: "Board Room",
    people: 8,
    bathrooms: 1,
    rate: "₹1500/8hr",
    description:
      "Our Board Room is ideal for meetings and conferences, offering a professional and well-equipped space.",
  },
];

function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleBookNowClick = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRoom(null);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const bookingData = {
      roomName: selectedRoom.name,
      customerName: formData.get("customerName"),
      phoneNumber: formData.get("phoneNumber"),
      description: formData.get("description"),
    };
    console.log("Booking Data:", bookingData);
    handleCloseModal();
  };

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
              src={room.image}
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
              <p className="text-md">{room.description}</p>
              <button
                className="flex items-center justify-center gap-2 w-full h-14 border p-4 bg-gray-200 text-gray-700 border-gray-300 button-transition"
                onClick={() => handleBookNowClick(room)}
              >
                <FaArrowRightLong />
                <RiMailSendLine />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        room={selectedRoom}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default Rooms;
