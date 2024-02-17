import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectApi } from "../../services/projectService";

function useOwnerProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectApi,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { projects } = data || {};

  return { projects, isLoading };
}

export default useOwnerProjects;
