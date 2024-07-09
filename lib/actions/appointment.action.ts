"use server";

import { ID, Query } from "node-appwrite";
import {
  databases,
  DATABASE_ID,
  APPOINTMENT_COLLECTION_ID,
} from "../appwrite.config";
import { parseStringify } from "../utils";
import { Appointment } from "@/types/appwrite.types";

export const createAppointment = async (
  appointment: CreateAppointmentParams
) => {
  const newAppointment = await databases.createDocument(
    DATABASE_ID!,
    APPOINTMENT_COLLECTION_ID!,
    ID.unique(),
    appointment
  );

  return parseStringify(newAppointment);
};

export const getAppointment = async (appointmentId: string) => {
  try {
    const appointment = await databases.getDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      appointmentId
    );

    return parseStringify(appointment);
  } catch (error) {
    console.error(error);
  }
};

export const getRecentAppointments = async () => {
  try {
    const appointments = await databases.listDocuments(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      [Query.orderDesc("$createdAt")]
    );

    const initialCounts = {
      scheduledCounts: 0,
      pendingCounts: 0,
      cancelledCounts: 0,
    };

    const counts = (appointments.documents as Appointment[]).reduce(
      (acc, appointment) => {
        if (appointment.status === "scheduled") {
          acc.scheduledCounts += 1;
        } else if (appointment.status === "pending") {
          acc.pendingCounts += 1;
        } else if (appointment.status === "cancelled") {
          acc.cancelledCounts += 1;
        }

        return acc;
      },
      initialCounts
    );

    const data = {
      totalCount: appointments.total,
      ...counts,
    };
  } catch (error) {
    console.error(error);
  }
};
