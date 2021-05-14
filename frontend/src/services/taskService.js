import http from "../http-common";

class TaskService {
  getAll() {
    return http.get("/tasks");
  }

  get(id) {
    return http.get(`/task/${id}`);
  }

  create(data, id) {
    return http.post(`/tasks/${id}`, data);
  }

  delete(id) {
    return http.delete(`/task/${id}`);
  }
}

export default new TaskService();