import { Accordion, AccordionItem } from "@nextui-org/react";

export default function FAQ() {
  return (
    <div className="mt-40 text-3xl container mx-auto">
      <h2 className="text-center text-5xl font-bold">Frequently Asked Questions</h2>
      <div className="container mx-auto bg-white rounded-lg border mt-24 border-gray-300 p-4">
        <Accordion variant="splitted">
          <AccordionItem
            key="1"
            aria-label="Check-in and Check-out"
            title="What are the check-in and check-out times at The Sea Beach Resort?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              {" "}
              Check-in at The Sea Beach Resort is from 01:00 PM, and check-out
              is until 11:00 AM. Early check-ins or late check-outs may be
              available upon request.
            </span>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Location"
            title="Where is The Sea Beach Resort located?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              The Sea Beach Resort is located north of Vijaya Children’s Park,
              Beach Road, Alleppey. Just a few steps from the beautiful Alleppey
              Beach and a short distance from United Club.
            </span>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Amenities"
            title="What amenities are available at The Sea Beach Resort?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              {" "}
              We offer beach access, a swimming pool, complimentary Wi-Fi,
              in-house dining, and Ayurvedic spa experiences in collaboration
              with a local wellness partner.
            </span>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Dining Options"
            title="What are the dining options at The Sea Beach Resort?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              {" "}
              Our resort has partnered with renowned restaurants to offer
              authentic Kerala specialities, seafood, and international dishes.
              Room service is also available.
            </span>
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Booking Room"
            title="How do I book a room at The Sea Beach Resort?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              {" "}
              You can book a room through our website or by calling our
              reservations team at +919447400150.
            </span>
          </AccordionItem>

          {/* Accommodation and Facilities */}
          <AccordionItem
            key="6"
            aria-label="Room Types"
            title="What types of rooms are available at The Sea Beach Resort?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              {" "}
              We offer deluxe, super deluxe sea-view rooms, premium suites, and
              private honeymoon suites with stunning beach or garden views.
            </span>
          </AccordionItem>
          <AccordionItem
            key="7"
            aria-label="Family Rooms"
            title="Are there family-friendly rooms available?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              {" "}
              Yes, our spacious rooms and suites are designed to accommodate
              families. Extra beds are available upon request.
            </span>
          </AccordionItem>
          <AccordionItem
            key="8"
            aria-label="Honeymoon"
            title="Is The Sea Beach Resort suitable for honeymooners?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              {" "}
              Absolutely! We offer honeymoon packages that include romantic
              beachfront dinners, spa treatments, and private suite
              accommodation.
            </span>
          </AccordionItem>
          <AccordionItem
            key="9"
            aria-label="Swimming Pool"
            title="Does the resort offer a swimming pool?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              {" "}
              Yes, our resort features a swimming pool located on the top floor
              with stunning views of the sea.
            </span>
          </AccordionItem>
          <AccordionItem
            key="10"
            aria-label="Ayurvedic Spa"
            title="Is there an Ayurvedic spa at The Sea Beach Resort?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              {" "}
              Yes, we offer Ayurvedic spa treatments, including massages,
              wellness therapies, and detox programs in collaboration with
              esteemed wellness partners.
            </span>
          </AccordionItem>

          <AccordionItem
            key="11"
            aria-label="Activities"
            title="What activities are available at or near the resort?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              {" "}
              Guests can enjoy beach activities like swimming, beach volleyball,
              sunset walks, houseboat tours, yoga sessions, and cultural tours
              of Alleppey.
            </span>
          </AccordionItem>
          <AccordionItem
            key="12"
            aria-label="Top Attractions"
            title="What are the top attractions near The Sea Beach Resort?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              {" "}
              Top attractions include the Alleppey Backwaters, Marari Beach,
              Alappuzha Lighthouse, and Ambalapuzha Sree Krishna Temple.
            </span>
          </AccordionItem>
          <AccordionItem
            key="13"
            aria-label="Houseboat Tours"
            title="Can I book a houseboat stay or tour through the resort?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              Yes, we offer exclusive houseboat packages and tours of Alleppey’s
              backwaters. Contact the front desk to arrange a tour.
            </span>
          </AccordionItem>
          <AccordionItem
            key="14"
            aria-label="Water Sports"
            title="Are water sports available at the resort?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              While we don’t offer motorized water sports, guests can enjoy
              various beach activities.
            </span>
          </AccordionItem>

          {/* Policies and Booking Information */}
          <AccordionItem
            key="15"
            aria-label="Cancellation Policy"
            title="What is the cancellation policy at The Sea Beach Resort?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              Cancellations made within 15 days of check-in are eligible for a
              full refund. A cancellation fee may apply for later cancellations.
            </span>
          </AccordionItem>
          <AccordionItem
            key="16"
            aria-label="Pets"
            title="Are pets allowed at The Sea Beach Resort?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              Unfortunately, we do not allow pets at the resort.
            </span>
          </AccordionItem>
          <AccordionItem
            key="17"
            aria-label="Parking"
            title="Is parking available at the resort?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              Yes, we offer complimentary parking with valet services upon
              request.
            </span>
          </AccordionItem>
          <AccordionItem
            key="18"
            aria-label="Airport Transfers"
            title="Does The Sea Beach Resort offer airport transfers?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              {" "}
              Yes, we provide airport transfers to and from Cochin International
              Airport. Please arrange in advance.
            </span>
          </AccordionItem>
          <AccordionItem
            key="19"
            aria-label="Special Packages"
            title="Do you offer special packages or promotions?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              {" "}
              Yes, we offer seasonal packages, honeymoon deals, and promotions
              for long-term stays. Contact our team for details.
            </span>
          </AccordionItem>
          <AccordionItem
            key="20"
            aria-label="Early Check-in"
            title="Can I request an early check-in or late check-out?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              {" "}
              Early check-ins and late check-outs are subject to availability.
              Please inform us in advance.
            </span>
          </AccordionItem>

          {/* Family and Accessibility */}
          <AccordionItem
            key="21"
            aria-label="Family Friendly"
            title="Is The Sea Beach Resort family-friendly?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              {" "}
              Yes, we offer family-friendly accommodations.
            </span>
          </AccordionItem>
          <AccordionItem
            key="22"
            aria-label="Accessible Rooms"
            title="Are there accessible rooms at the resort?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              {" "}
              Yes, we have wheelchair-accessible rooms. Please inform us when
              booking.
            </span>
          </AccordionItem>

          {/* Dining and Services */}
          <AccordionItem
            key="23"
            aria-label="Room Service"
            title="Does The Sea Beach Resort offer room service?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              {" "}
              Yes, room service is available for breakfast, lunch, and dinner.
              Private dining experiences can also be arranged.
            </span>
          </AccordionItem>
          <AccordionItem
            key="24"
            aria-label="Private Beach Dinner"
            title="Can I arrange a private beachfront dinner at The Sea Beach Resort?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              Yes, we offer private beach dining experiences. Contact our team
              to arrange.
            </span>
          </AccordionItem>
          <AccordionItem
            key="25"
            aria-label="Wi-Fi"
            title="Is Wi-Fi available at the resort?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              Yes, we offer complimentary high-speed Wi-Fi throughout the
              resort.
            </span>
          </AccordionItem>

          {/* COVID-19 and Safety Protocols */}
          <AccordionItem
            key="26"
            aria-label="Safety Protocols"
            title="What are the safety measures in place due to COVID-19?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              We have enhanced cleaning protocols, contactless check-in, and
              social distancing measures. Hand sanitizers are available
              throughout the resort.
            </span>
          </AccordionItem>
          <AccordionItem
            key="27"
            aria-label="COVID Test"
            title="Do I need to show a negative COVID-19 test to check in?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              {" "}
              We do not require a negative test, but we ask guests to follow
              local health guidelines.
            </span>
          </AccordionItem>

          {/* Additional Information */}
          <AccordionItem
            key="28"
            aria-label="Best Time to Visit"
            title="What is the best time to visit The Sea Beach Resort?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              The best time to visit is between November and February, with
              pleasant weather for beach activities and backwater exploration.
            </span>
          </AccordionItem>
          <AccordionItem
            key="29"
            aria-label="Events and Festivals"
            title="Are there any special events or festivals nearby?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              Alleppey hosts events like the Nehru Trophy Boat Race in August
              and temple festivals. Our staff can provide more information.
            </span>
          </AccordionItem>
          <AccordionItem
            key="30"
            aria-label="Contact"
            title="How can I contact The Sea Beach Resort?"
            className="border border-gray-300 rounded-md bg-white shadow-sm"
          >
            <span className="text-2xl">
              You can reach us at +919447400150 or email
              theseaalleppey@gmail.com or contact@alleppeybeachresort.com.
            </span>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
