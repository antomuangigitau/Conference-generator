import { z } from "zod";

export const attendeeDetailsSchema = z.object({
  profilePhotoUrl: z.string().url("Invalid URL").optional(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  specialRequest: z.string().optional(),
});

export type AttendeeDetailsFormData = z.infer<typeof attendeeDetailsSchema>;
