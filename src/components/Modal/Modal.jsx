import React from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa'; // Import icons from react-icons

function Modal({ show, onClose, room, onSubmit }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Book Room: {room.name}</h2>
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
              <FaTimes /> 
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#899090] text-white rounded flex items-center gap-2"
            >
              <FaCheck /> 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
