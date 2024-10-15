import { z } from "zod";

export const UserSignupSchema = z.object({
  firstName: z.string().min(1, "This field must not be empty"),
  lastName: z.string().min(1, "This field must not be empty"),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, "This field must not be empty"),
});

export const UserLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, "This field must not be empty"),
});

export const UserForgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export const UserResetPasswordSchema = z
  .object({
    password: z.string().min(1, "This field must not be empty"),
    passwordConfirm: z.string().min(1, "This field must not be empty"),
  })
  .refine((obj) => obj.password === obj.passwordConfirm, {
    message: "Passwords must match",
  });

export type UserSignupSchemaType = z.infer<typeof UserSignupSchema>;
export type UserLoginSchemaType = z.infer<typeof UserLoginSchema>;
export type UserForgotPasswordSchemaType = z.infer<
  typeof UserForgotPasswordSchema
>;
export type UserResetPasswordSchemaType = z.infer<
  typeof UserResetPasswordSchema
>;
