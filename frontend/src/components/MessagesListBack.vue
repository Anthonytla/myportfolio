<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Messages</h4>
        <ul class="list-group message">
          <li
            class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(contact, index) in contacts"
            :key="index"
            @click="setActiveContact(contact, index)"
          >
            <label :for="contact._id"></label> {{ contact.email }}
          </li>
        </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentContact">
        <h4>Contact</h4>
        <div>
          <label :for="currentContact._id"><strong>Lastname:</strong></label>
          {{ currentContact.lastname }}
        </div>
        <div>
          <label><strong>Email:</strong></label>
          {{ currentContact.email }}
        </div>
        <div class="text">
          <label><strong>Message:</strong></label>
          {{ currentContact.message }}
        </div>
      </div>
      <div v-else>
        <br />
        <div>Please click on a Contact...</div>
      </div>
    </div>
  </div>
</template>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>

<script>
import ContactService from "../services/contactService";

export default {
  name: "contacts-list",
  data() {
    return {
      contacts: [],
      currentContact: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveContacts() {
      ContactService.getAll()
        .then((response) => {
          this.contacts = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    setActiveContact(contact, index) {
      this.currentContact = contact;
      this.currentIndex = index;
    },

    removeAllContacts() {
      ContactService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveContacts();
  },
};
</script>