import { toast } from "@/hooks/use-toast";
import { loginUser } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log(data);
      toast({
        title: "Welcome buddy!",
        description: "You've logged in successfully",
      });

      navigate("/");
    },
    onError: (error: any) => {
      toast({
        title: error.response.data.status,
        description: error.response.data.message,
      });
    },
  });

  return { mutate, isPending };
}
export default useLogin;
