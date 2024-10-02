import FormFieldInput from "@/components/custom/FormInputField";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import {
  UserForgotPasswordSchema,
  UserForgotPasswordSchemaType,
} from "@/models/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function ForgotPasswordForm() {
  const form = useForm<UserForgotPasswordSchemaType>({
    resolver: zodResolver(UserForgotPasswordSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  return (
    <Card className="mx-auto max-w-md my-20 border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl">Forgot Password?</CardTitle>
        <CardDescription className="text-gray-400">
          Not to worry. Let's get you a new password in a minute
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="grid gap-4">
            <FormFieldInput
              control={form.control}
              label="Email"
              name="email"
              type="email"
              placeholder="JohnDoe@gmail.com"
              inputClassName="border-gray-700"
            />

            <Button type="submit" className="w-full bg-sky-700">
              Send me the link
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-center text-sm gap-2">
        Think you have remembered?
        <Link to="/login" className="underline">
          Sign in
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ForgotPasswordForm;
