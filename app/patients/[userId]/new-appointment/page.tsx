import { HeartPulseIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

const NewAppointmentPage = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: OTP Verification */}
      <section className="remove-scrollbar my-auto container">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <div className="flex justify-center items-center gap-2 mb-12 w-fit">
            <HeartPulseIcon className="w-6 h-6 text-green-500 font-bold" />
            <h1 className="text-2xl font-bold">
              care<span className="text-green-500">pulse</span>
            </h1>
          </div>

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />

          <p className="text-14-regular copyright mt-10">
            &copy; 2024 CarePulse
          </p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default NewAppointmentPage;
