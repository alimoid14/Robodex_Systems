import Link from "next/link";

type ServiceCardProps = {
  name: string;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ name }) => {
  return (
    <div className="flex flex-col justify-between sm:max-w-sm p-6 bg-black border-4 rounded-3xl shadow">
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {name}
        </h5>
      </div>

      <Link href={`/services/${name}`} passHref={true}>
        <p className="inline-flex items-center px-3 py-2 text-sm text-center text-white bg-gradient-to-b from-[#45A29E] to-[#66FCF1] rounded-lg hover:from-[#45A29E] hover:to-[#45A29E] focus:ring-4 focus:outline-none focus:ring-[#45A29E]">
          View {name}
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </p>
      </Link>
    </div>
  );
};
