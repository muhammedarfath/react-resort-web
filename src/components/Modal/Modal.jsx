import React from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa'; 
import { toast } from 'react-hot-toast'; 

function Modal({ show, onClose, room }) {
  if (!show) return null;

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3dc9160f-4797-4cea-9a14-0bd7c3a8d621");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Message sent successfully!");
        onClose(); 
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg mx-4 md:mx-0 md:w-1/3">
        <h2 className="text-xl font-bold mb-4 text-center md:text-left">
          Book Room: {room.name}
        </h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Customer Name</label>
            <input
              type="text"
              name="customerName"
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded flex items-center gap-2 mr-2"
              onClick={onClose}
            >
              <FaTimes /> Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#899090] text-white rounded flex items-center gap-2"
            >
              <FaCheck /> Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
