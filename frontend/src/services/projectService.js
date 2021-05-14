import http from "../http-common";

class ProjectService {
  getAll() {
    return http.get("/projects");
  }

  create(data) {
    return http.post("/projects", data);
  }

  update(id, data) {
    return http.put(`/project/${id}`, data);
  }
  get(id) {
    return http.get(`/project/${id}`);
  }
  delete(id) {
    return http.delete(`/project/${id}`);
  }
}

export default new ProjectService();