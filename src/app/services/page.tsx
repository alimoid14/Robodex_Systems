import React from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "../constants/services";

const page = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 mt-16 sm:px-6 lg:px-8 mb-16">
      <div className="flex flex-row justify-between items-center mb-8">
        <p className="text-4xl font-extrabold text-[#66FCF1] text-center mx-auto mb-4">
          We provide our clients with the following Services
        </p>
      </div>
      <p className="text-2xl font-semibold mb-4 text-black">Our Services:</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services && services.length > 0 ? (
          services.map((service, index) => (
            <ServiceCard key={index} name={service.name} />
          ))
        ) : (
          <p>No services</p>
        )}
      </div>
    </div>
  );
};

export default page;
