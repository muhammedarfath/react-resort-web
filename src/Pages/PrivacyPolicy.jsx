import React from "react";
import FAQ from "./FAQ";

function PrivacyPolicy() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 mt-7 md:mt-24">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
      </div>
      <hr className="border-gray-300 mb-8" />
      <div className="space-y-6 text-gray-700 leading-relaxed text-2xl">
        <p>
          At <span className="font-semibold">The Sea Beach Resort</span>, we
          value your privacy and are committed to protecting your personal
          information. This privacy policy outlines how we collect, use, and
          safeguard the data you provide when using our website.
        </p>

        <h2 className="text-xl font-semibold">Information We Collect</h2>
        <p>We may collect the following information:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Personal details such as name, email address, phone number, and
            address when you make a booking or contact us.
          </li>
          <li>
            Payment information when you make a reservation or purchase
            services.
          </li>
          <li>
            Information related to your stay, such as preferences, special
            requests, or feedback.
          </li>
          <li>
            Automatically collected data, including IP addresses, browser type,
            and device information, when you visit our website.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">How We Use Your Information</h2>
        <p>The information we collect is used for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To process bookings, payments, and provide customer service.</li>
          <li>To personalize your experience during your stay.</li>
          <li>
            To communicate promotional offers, news, or updates (with your
            consent).
          </li>
          <li>To improve our website, services, and customer satisfaction.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2 className="text-xl font-semibold">Data Sharing</h2>
        <p>
          We do not sell or share your personal information with third parties,
          except in the following circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            With trusted service providers for payment processing or to provide
            services related to your stay (e.g., wellness and dining partners).
          </li>
          <li>
            To comply with legal requirements or protect the rights, property,
            and safety of the resort and its guests.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">Data Security</h2>
        <p>
          We take appropriate technical and organizational measures to protect
          your personal data from unauthorized access, alteration, or
          disclosure.
        </p>

        <h2 className="text-xl font-semibold">Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access, correct, or delete your personal information.</li>
          <li>Opt-out of marketing communications at any time.</li>
          <li>Request details of the data we hold about you.</li>
        </ul>

        <h2 className="text-xl font-semibold">Cookies</h2>
        <p>
          Our website uses cookies to enhance your browsing experience and
          analyze website traffic. You can adjust your browser settings to
          refuse cookies if you prefer.
        </p>

        <h2 className="text-xl font-semibold">Contact Us</h2>
        <p>
          If you have any questions or concerns regarding our privacy practices,
          please contact us at{" "}
          <a
            href="mailto:theseaalleppey@gmail.com"
            className="text-blue-600 underline"
          >
            theseaalleppey@gmail.com
          </a>{" "}
          or call us at{" "}
          <a href="tel:+919447400150" className="text-blue-600 underline">
            +919447400150
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold">Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
