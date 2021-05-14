import http from "../http-common";

class EducationService {
  getAll() {
    return http.get("/educations");
  }

  get(id) {
    return http.get(`/education/${id}`);
  }

  create(data) {
    return http.post("/educations", data);
  }

  update(id, data) {
    return http.put(`/education/${id}`, data);
  }

  delete(id) {
    return http.delete(`/education/${id}`);
  }
}

export default new EducationService();