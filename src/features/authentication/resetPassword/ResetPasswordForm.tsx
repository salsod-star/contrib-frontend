import FormFieldInput from "@/components/custom/FormInputField";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import {
  UserResetPasswordSchema,
  UserResetPasswordSchemaType,
} from "@/models/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useResetPassword from "../hooks/useResetPassword";
import { useParams } from "react-router-dom";

function ResetPasswordForm() {
  const params = useParams();
  const resetToken = params.resetToken!;

  const { mutate } = useResetPassword();

  const form = useForm<UserResetPasswordSchemaType>({
    resolver: zodResolver(UserResetPasswordSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = (payload: UserResetPasswordSchemaType) => {
    mutate({ payload, resetToken });
  };

  return (
    <Card className="mx-auto max-w-md my-20 border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl">Reset your password</CardTitle>
        <CardDescription className="text-gray-400">
          It's nice to have you here...we are always here to make you a new
          password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormFieldInput
              control={form.control}
              label="Password"
              name="password"
              type="password"
              placeholder="Your new password"
              inputClassName="border-gray-700"
              required
            />

            <FormFieldInput
              control={form.control}
              label="Confirm password"
              name="passwordConfirm"
              type="password"
              placeholder="Confirm new password"
              inputClassName="border-gray-700"
              required
            />

            <Button type="submit" className="w-full bg-sky-700">
              Change my password
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
export default ResetPasswordForm;
