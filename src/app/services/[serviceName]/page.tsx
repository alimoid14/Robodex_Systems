"use client";
import { useParams } from "next/navigation";
import { services, serviceType } from "@/app/constants/services";

export default function ServicePage() {
  const { serviceName }: { serviceName: string } = useParams();
  const name = serviceName.replace(/\%20/g, " ");

  function getServiceByName(name: string): serviceType | undefined {
    return services.find((service) => service.name === name);
  }

  const service = getServiceByName(name);

  return (
    <div className="mx-auto max-w-7xl px-4 mt-16 sm:px-6 lg:px-8 mb-16">
      <h1 className="text-4xl font-extrabold text-[#66FCF1] mb-4 text-center mx-auto">
        {service?.name}
      </h1>
      <p className="text-xl">{service?.description}</p>
    </div>
  );
}
