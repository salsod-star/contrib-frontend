import { useToast } from "@/hooks/use-toast";
import { UserResetPasswordSchemaType } from "@/models/auth";
import { resetPassword } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type resetPasswordProps = {
  payload: UserResetPasswordSchemaType;
  resetToken: string;
};

function useResetPassword() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ payload, resetToken }: resetPasswordProps) =>
      resetPassword(payload, resetToken),
    onSuccess() {
      toast({
        title: "Password changed successfully",
      });

      navigate("/");
    },
    onError(err: any) {
      toast({
        type: "foreground",
        variant: "destructive",
        title: err.response.data.message,
      });
    },
  });
  return { mutate, isPending };
}
export default useResetPassword;
