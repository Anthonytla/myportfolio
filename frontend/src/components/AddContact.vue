<template>
  <div class="col-md-12">
    <div class="card card-container">
      <form>
        <div v-if="!submitted">
          <div class="form-group">
            <label for="lastname">Lastname</label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              required
              v-model="contact.lastname"
              name="lastname"
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              class="form-control"
              id="email"
              required
              v-model="contact.email"
              name="email"
            />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              type="text"
              class="form-control"
              id="message"
              required
              v-model="contact.message"
              name="message"
            />
          </div>

          <button @click="saveContact" class="btn btn-success">Submit</button>
        </div>

        <div v-else>
          <h4>Your message was sent successfully!</h4>
        </div>
      </form>
    </div>
  </div>
  
</template>

<script>
import ContactService from "../services/contactService";

export default {
  name: "add-contact",
  data() {
    return {
      contact: {
        id: null,
        lastname: "",
        email: "",
        message: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveContact() {
      var data = {
        lastname: this.contact.lastname,
        message: this.contact.message,
        email: this.contact.email,
      };

      ContactService.create(data)
        .then((response) => {
          this.contact.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>

</style>