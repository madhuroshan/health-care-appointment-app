import { z } from "zod";

export const UserFormValidation = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), {}),
});
