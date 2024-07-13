import StatCard from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";

import { getRecentAppointments } from "@/lib/actions/appointment.action";

import { HeartPulseIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const AdminPage = async () => {
  const appointments = await getRecentAppointments();
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <div className="flex justify-center items-center gap-2 w-fit">
            <HeartPulseIcon className="w-6 h-6 text-green-500 font-bold" />
            <h1 className="text-2xl font-bold">
              care<span className="text-green-500">pulse</span>
            </h1>
          </div>
        </Link>

        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4 ">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing your patients
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments?.scheduledCounts || 0}
            label="Scheduled Appointments"
            icon="/assets/icons/appointments.svg"
          />
          <StatCard
            type="pending"
            count={appointments?.pendingCounts || 0}
            label="Pending Appointments"
            icon="/assets/icons/pending.svg"
          />
          <StatCard
            type="cancelled"
            count={appointments?.cancelledCounts || 0}
            label="Cancelled Appointments"
            icon="/assets/icons/cancelled.svg"
          />
        </section>

        <DataTable data={appointments?.documents!} columns={columns} />
      </main>
    </div>
  );
};

export default AdminPage;
