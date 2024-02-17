import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProjectsApi } from "../../services/projectService";
import toast from "react-hot-toast";

export function useRemoveProject() {
  const queryClient = useQueryClient();

  const { mutate: removeProject, isPending: isDeletting } = useMutation({
    mutationFn: deleteProjectsApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { removeProject, isDeletting };
}
