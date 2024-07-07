import PatientForm from "@/components/forms/PatientForm";
import PasskeyModal from "@/components/PasskeyModal";
import { HeartPulseIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}
      <section className="remove-scrollbar my-auto container">
        <div className="sub-container max-w-[496px]">
          <div className="flex justify-center items-center gap-2 mb-12 w-fit">
            <HeartPulseIcon className="w-6 h-6 text-green-500 font-bold" />
            <h1 className="text-2xl font-bold">
              care<span className="text-green-500">pulse</span>
            </h1>
          </div>

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              &copy; 2024 CarePulse
            </p>

            <Link className="text-green-500" href="/?admin=true">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
