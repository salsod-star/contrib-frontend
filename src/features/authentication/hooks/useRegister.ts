import { useToast } from "@/hooks/use-toast";
import { createUser } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";

function useRegister() {
  const { toast } = useToast();

  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toast({
        title: "Welcome buddy!",
        description: "A very warmth welcome to our newest member",
      });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: error.response.data.status.toUpperCase(),
        description: error.response.data.message,
      });
    },
  });

  return { mutate, isSuccess, isPending };
}

export default useRegister;
