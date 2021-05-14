import http from "../http-common";

class ExperienceService {
  getAll() {
    return http.get("/experiences");
  }

  get(id) {
    return http.get(`/experience/${id}`);
  }

  create(data) {
    return http.post("/experiences", data);
  }

  update(id, data) {
    return http.put(`/experience/${id}`, data);
  }

  delete(id) {
    return http.delete(`/experience/${id}`);
  }
}

export default new ExperienceService();