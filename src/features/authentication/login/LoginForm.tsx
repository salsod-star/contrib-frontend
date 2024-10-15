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
import { UserLoginSchema, UserLoginSchemaType } from "@/models/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

function LoginForm() {
  const { mutate } = useLogin();

  const form = useForm<UserLoginSchemaType>({
    resolver: zodResolver(UserLoginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: UserLoginSchemaType) => {
    mutate(data);
  };

  return (
    <Card className="mx-auto max-w-md my-20 border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription className="text-gray-400">
          Welcome back. A quick login credentials is needed to have you proceed
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormFieldInput
              control={form.control}
              label="Email"
              name="email"
              type="email"
              placeholder="JohnDoe@gmail.com"
              inputClassName="border-gray-700"
            />

            <FormFieldInput
              control={form.control}
              label="Password"
              name="password"
              type="password"
              placeholder="**********"
              inputClassName="border-gray-700"
            >
              <Link
                to="/forgotPassword"
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </Link>
            </FormFieldInput>

            <Button type="submit" className="w-full bg-sky-700">
              Sign in
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-center text-sm gap-2">
        Don&apos;t have an account?
        <Link to="/register" className="underline">
          Sign up
        </Link>
      </CardFooter>
    </Card>
  );
}
export default LoginForm;
