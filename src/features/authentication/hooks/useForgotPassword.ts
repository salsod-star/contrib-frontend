import { useToast } from "@/hooks/use-toast";
import { requestPasswordResetLink } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";

function useForgotPassword() {
  const { toast } = useToast();

  const { mutate } = useMutation({
    mutationFn: requestPasswordResetLink,
    onSuccess: (response: any) => {
      console.log(response);

      toast({
        title: response.message,
      });
    },
  });
  return { mutate };
}
export default useForgotPassword;
