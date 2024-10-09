import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { RiMailSendLine } from "react-icons/ri";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlCalender } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa6";
import app from "../../firebase/FirebaseConfig";
import {
  getDatabase,
  ref,
  set,
  push,
  get,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";
import { toast, Toaster } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

export default function RoomModal({ room }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [roomName, setRoomName] = useState(room.roomName);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(room.totalPrice);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [additionalFees, setAdditionalFees] = useState("");
  const sendEmail = async (bookingDetails) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "3dc9160f-4797-4cea-9a14-0bd7c3a8d621");
    formData.append("subject", "Room Booking Confirmation");
    formData.append(
      "message",
      `
      Booking Details:
      Room Name: ${bookingDetails.roomName}
      Start Date: ${bookingDetails.startDate}
      End Date: ${bookingDetails.endDate}
      Adults: ${bookingDetails.adults}
      Children: ${bookingDetails.children}
      customer Name: ${bookingDetails.customerName}
      customer Email: ${bookingDetails.customerEmail}
      customer Phone: ${bookingDetails.customerPhone}
      Special Requests: ${bookingDetails.specialRequests}
      Price: ${bookingDetails.price}
    `
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (response.success) {
        toast.success("Confirmation email sent successfully!");
      } else {
        toast.error("Failed to send confirmation email.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = () => {
    onOpen();
  };

  const isRoomAlreadyBooked = async () => {
    const db = getDatabase(app);
    const bookingsRef = query(
      ref(db, "bookings"),
      orderByChild("roomName"),
      equalTo(roomName)
    );

    const snapshot = await get(bookingsRef);
    if (snapshot.exists()) {
      const bookings = snapshot.val();

      for (let key in bookings) {
        const booking = bookings[key];
        const bookedStartDate = new Date(booking.startDate);
        const bookedEndDate = new Date(booking.endDate);

        if (
          (startDate >= bookedStartDate && startDate <= bookedEndDate) ||
          (endDate >= bookedStartDate && endDate <= bookedEndDate) ||
          (bookedStartDate >= startDate && bookedEndDate <= endDate)
        ) {
          return true;
        }
      }
    }

    return false;
  };

  const saveBookingToFirebase = (bookingDetails) => {
    const db = getDatabase(app);
    const bookingsRef = ref(db, "bookings");
    const newBookingRef = push(bookingsRef);

    setLoading(true);

    set(newBookingRef, bookingDetails)
      .then(() => {
        toast.success("Booking saved successfully.");
        sendEmail(bookingDetails);
      })
      .catch((error) => {
        toast.error("Error saving booking");
      });
    setLoading(false);
  };

  const handleBookNow = async () => {
    if (
      !customerName.trim() ||
      !customerEmail.trim() ||
      !customerPhone.trim()
    ) {
      toast.error(
        "All customer details fields (Name, Email, Phone) are required."
      );
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(customerEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const standardCapacity = 2;
    const additionalPersonCharge = 1000;
    let totalAmount = price;

    if (adults > standardCapacity) {
      const extraPeople = adults - standardCapacity;
      totalAmount += extraPeople * additionalPersonCharge;
      setPrice(totalAmount);
    }

    const roomAlreadyBooked = await isRoomAlreadyBooked();

    if (roomAlreadyBooked) {
      toast.error(
        "The selected room is already booked for the selected dates. Please choose different dates."
      );
    } else {
      const bookingDetails = {
        roomName,
        startDate: startDate.toDateString(),
        endDate: endDate.toDateString(),
        adults,
        children,
        price: totalAmount,
        customerName,
        customerEmail,
        customerPhone,
        specialRequests,
      };

      // Save booking to Firebase
      saveBookingToFirebase(bookingDetails);
      onClose();
    }
  };

  const Updateprice = async () => {
    if (adults > 2) {
      setAdditionalFees(500)
      const totalfee = price + additionalFees;
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="flex flex-wrap gap-3">
        <Button
          onClick={handleOpen}
          className="flex items-center justify-center gap-2 w-full h-14 border p-4 bg-gray-200 text-gray-700 "
        >
          <FaArrowRight className="text-xl" />
          <RiMailSendLine className="text-xl" />
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        className="max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] bg-white shadow-xl rounded-xl border font-sans overflow-auto"
        backdrop="blur"
      >
        <ModalContent className="overflow-hidden">
          <ModalHeader className="text-xl md:text-2xl font-semibold text-gray-800">
            Book a Room
          </ModalHeader>
          <ModalBody className="max-h-[80vh] overflow-y-auto">
            <div className="mb-4 flex gap-7">
              {room.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Room Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg mb-2"
                />
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-6">
              <div>
                <label className="block text-md text-gray-700 mb-1">
                  Room Name
                </label>
                <Input
                  type="text"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  readOnly
                  className="w-full border-2 border-gray-500 rounded-lg "
                />
              </div>
              <div>
                <label className="block text-md text-gray-700 mb-1">
                  Start Date
                </label>
                <div className="relative">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    startDate={startDate}
                    endDate={endDate}
                    selectsStart
                    dateFormat="yyyy/MM/dd"
                    className="p-2 w-full border-2 border-gray-500 rounded-lg "
                  />
                  <SlCalender className="absolute top-3 right-3 text-gray-500" />
                </div>
              </div>
              <div>
                <label className="block text-md text-gray-700 mb-1">
                  End Date
                </label>
                <div className="relative">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    startDate={startDate}
                    endDate={endDate}
                    selectsEnd
                    minDate={startDate}
                    dateFormat="yyyy/MM/dd"
                    className="p-2 w-full border-2 border-gray-500 rounded-lg "
                  />
                  <SlCalender className="absolute top-3 right-3 text-gray-500" />
                </div>
              </div>
              <div>
                <label className="block text-md text-gray-700 mb-1">
                  Number of Adults
                </label>
                <Input
                  type="number"
                  value={adults}
                  onChange={(e) => {
                    setAdults(parseInt(e.target.value));
                    Updateprice();
                  }}
                  min={1}
                  className="w-full border-2 border-gray-500 rounded-lg"
                />
                <p className="text-sm text-gray-500 mt-2">
                  <span className="text-red-500">*</span> Only 2 people can use
                  one bed. If more than 2 people use one bed, there is an
                  additional charge of ₹500.
                </p>
              </div>

              <div>
                <label className="block text-md text-gray-700 mb-1">
                  Number of Children
                </label>
                <Input
                  type="number"
                  value={children}
                  onChange={(e) => setChildren(parseInt(e.target.value))}
                  min={0}
                  className="w-full border-2 border-gray-500 rounded-lg "
                />
              </div>
              <div className="border-2 border-gray-500 rounded-lg p-4">
                <label className="block text-md text-gray-700 mb-1">
                  Price Breakdown
                </label>
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Base Price:</span>
                    <span className="text-gray-700">₹{price}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Additional Fees:</span>
                    <span className="text-gray-700">₹{additionalFees}</span>
                  </div>

                  <div className="flex justify-between border-t border-gray-300 pt-2 mt-2">
                    <span className="font-bold text-gray-700">
                      Total Price:
                    </span>
                    <span className="font-bold text-gray-700">₹{price + additionalFees }</span>
                  </div>
                </div>
              </div>

              <h1 className="font-bold text-lg col-span-full">Customer Info</h1>
              <div className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div>
                  <label className="block text-md text-gray-700 mb-1">
                    Name
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                    placeholder="Customer Name"
                    className="w-full border-2 border-gray-500 rounded-lg "
                  />
                </div>
                <div>
                  <label className="block text-md text-gray-700 mb-1">
                    Email
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    required
                    placeholder="Customer Email"
                    className="w-full border-2 border-gray-500 rounded-lg "
                  />
                </div>
                <div>
                  <label className="block text-md text-gray-700 mb-1">
                    Phone
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    required
                    placeholder="Customer Phone"
                    className="w-full border-2 border-gray-500 rounded-lg "
                  />
                </div>
                <div className="col-span-full">
                  <label className="block text-md text-gray-700 mb-1">
                    Special Requests
                  </label>
                  <Input
                    type="text"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Customer Requests"
                    className="w-full border-2 border-gray-500 rounded-lg "
                  />
                </div>
              </div>
            </div>

            <p className="mt-4 text-gray-600">
              After booking your room, our team will get in touch with you for
              more details. Feel free to book now. Happy staying!
            </p>
          </ModalBody>

          <ModalFooter className="flex gap-4 flex-wrap">
            <Button
              color="danger"
              variant="light"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border"
            >
              Close
            </Button>
            <Button
              color="primary"
              disabled={loading}
              onClick={handleBookNow}
              className="px-4 py-2 rounded-lg bg-[#F9DABB] text-black flex items-center gap-2"
            >
              {loading && <FaSpinner className="animate-spin" />}
              Book Now
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
