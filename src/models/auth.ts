import { z } from "zod";

export const UserSignupSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string(),
});

export const UserLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string(),
});

export const UserForgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export type UserSignupSchemaType = z.infer<typeof UserSignupSchema>;
export type UserLoginSchemaType = z.infer<typeof UserLoginSchema>;
export type UserForgotPasswordSchemaType = z.infer<
  typeof UserForgotPasswordSchema
>;
