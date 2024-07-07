import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.action";
import { formatDateTime } from "@/lib/utils";
import { HeartPulseIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { Button } from "@/components/ui/button";

const SuccessPage = async ({
  params: { userId },
  searchParams,
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);
  const doctor = Doctors.find(
    (doctor) => doctor.name === appointment.primaryPhysician
  );

  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <div>
            <div className="flex justify-center items-center gap-2 mb-12 w-fit">
              <HeartPulseIcon className="w-6 h-6 text-green-500 font-bold" />
              <h1 className="text-2xl font-bold">
                care<span className="text-green-500">pulse</span>
              </h1>
            </div>
          </div>
        </Link>
        <section className="flex flex-col items-center justify-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={300}
            alt="success"
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">appointment request</span> has
            been successfully booked!
          </h2>
          <p className="text-dark-600">
            We'll be in touch with you shortly to confirm your appointment.
          </p>
        </section>

        <section className="request-details">
          <p>Appointment Details</p>
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image!}
              alt="doctor"
              height={50}
              width={50}
              className="size-6"
            />
            <p className="whitespace-nowrap">{doctor?.name}</p>
          </div>

          <div className="flex gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              alt="calendar"
              height={24}
              width={24}
            />
            <p>{formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>

        <Button variant="outline" className="shad-primary-btn">
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SuccessPage;
