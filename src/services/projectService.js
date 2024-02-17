import http from "./httpService";

export function getOwnerProjectApi(data) {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function deleteProjectsApi(id) {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}
