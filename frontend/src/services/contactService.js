import http from "../http-common";

class ContactService {
  getAll() {
    return http.get("/contacts");
  }

  create(data) {
    return http.post("/contacts", data);
  }
}

export default new ContactService();