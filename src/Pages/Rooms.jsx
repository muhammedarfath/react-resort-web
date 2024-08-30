import React, { useState } from "react";
import imageone from "../assets/room1.jpg";
import imagetwo from "../assets/room2.jpg";
import imagethree from "../assets/room3.jpg";
import imagefour from "../assets/room4.jpg";
import imagefive from "../assets/room5.jpg";
import imagesix from "../assets/room6.jpg";
import imageseven from "../assets/room7.jpg";
import Modal from "../components/Modal/Modal";
import { LiaBathSolid } from "react-icons/lia";
import { RiUserFollowLine } from "react-icons/ri";
import { RiMailSendLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";

const rooms = [
  {
    id: 1,
    image: imageone,
    name: "Deluxe Room",
    people: 2,
    bathrooms: 1,
    rate: "₹150/night",
    description:
      "A cozy deluxe room with modern amenities and a comfortable king-sized bed.",
  },
  {
    id: 2,
    image: imagetwo,
    name: "Superior Room",
    people: 3,
    bathrooms: 1,
    rate: "₹200/night",
    description:
      "Spacious superior room with a queen-sized bed and a beautiful city view.",
  },
  {
    id: 3,
    image: imagethree,
    name: "Family Suite",
    people: 4,
    bathrooms: 2,
    rate: "₹300/night",
    description:
      "Perfect for families, this suite includes two bedrooms and a large living area.",
  },
  {
    id: 4,
    image: imagefour,
    name: "Single Room",
    people: 1,
    bathrooms: 1,
    rate: "₹100/night",
    description:
      "A compact and budget-friendly single room with all essential facilities.",
  },
  {
    id: 5,
    image: imagefive,
    name: "Double Room",
    people: 2,
    bathrooms: 1,
    rate: "₹180/night",
    description:
      "Comfortable double room with twin beds and a relaxing ambiance.",
  },
  {
    id: 6,
    image: imagesix,
    name: "Luxury Suite",
    people: 4,
    bathrooms: 2,
    rate: "₹350/night",
    description:
      "Luxury suite with elegant furnishings, two bathrooms, and a balcony.",
  },
  {
    id: 7,
    image: imageseven,
    name: "Presidential Suite",
    people: 5,
    bathrooms: 3,
    rate: "₹500/night",
    description:
      "Top-of-the-line presidential suite with a private terrace and exclusive amenities.",
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
    <div className="container mx-auto mt-36 px-4">
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
                <h3 className="text-2xl font-bold">{room.name}</h3>
                <p className="text-black font-sans text-xl">{room.rate}</p>
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
