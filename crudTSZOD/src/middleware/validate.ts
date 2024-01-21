import { string, z } from "zod";


export const zoduserSchema = z.object({
    name: z.string(),
    email: z.string(),
    gender: z.string(),
  });

export type userSchema = z.infer<typeof zoduserSchema>;
