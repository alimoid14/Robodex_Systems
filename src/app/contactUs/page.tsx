import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 mt-16 sm:px-6 lg:px-8 mb-16">
      <h1 className="text-4xl text-center font-extrabold text-[#66FCF1]">
        {" "}
        Contact Information
      </h1>
      <div className="max-w-2xl mx-auto mt-8 border-4 border-white p-4 sm:p-6 md:p-8 rounded-3xl bg-black">
        <h2 className="text-2xl font-bold mb-4 text-[#45A29E]">Address</h2>
        <p className="text-xl mb-4">
          Vidya Nagar, Neelmatha (Opposite Central Public School), Cantt.
          Lucknow, 226002
        </p>
        <hr />
        <h2 className="text-2xl font-bold mb-4 mt-4 text-[#45A29E]">Emails</h2>
        <p className="text-xl">
          <Link href="mailto:robodexsystems@gmail.com?subject=Inquiry&body=Hello, I would like to inquire about your services.">
            Email Robodex Systems
          </Link>
        </p>
        <p className="text-xl mb-4">
          <Link href="mailto:amit.bendenn@gmail.com?subject=Business%20Collaboration&body=Hi Amit, I am reaching out for a possible collaboration.">
            Email Amit (Business Manager)
          </Link>
        </p>
        <hr />
        <h2 className="text-2xl font-bold mb-4 mt-4 text-[#45A29E]">
          Mobile Numbers
        </h2>
        <p className="text-xl">
          Call Robodex Systems:<a href="tel:+919305102236">📞 +919305102236</a>
        </p>
        <p className="text-xl">
          Call Robodex Systems:<a href="tel:+918081524346">📞 +918081524346</a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
