<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{ currentUser.lastname }}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Id:</strong>
      {{ currentUser.id }}
    </p>
    <p>
      <strong>Firstname:</strong>
      {{ currentUser.firstname }}
    </p>
    <p>
      <strong>Lastname:</strong>
      {{ currentUser.lastname }}
    </p>
    <p>
      <strong>Email:</strong>
      {{ currentUser.email }}
    </p>
    <p>
      <strong>Phone:</strong>
      {{ currentUser.phone }}
    </p>
    <p>
      <strong>Address:</strong>
      {{ currentUser.address }}
    </p>
    <p>
      <strong>City:</strong>
      {{ currentUser.city }}
    </p>
    <p>
      <strong>Country:</strong>
      {{ currentUser.country }}
    </p>
    <p>
      <strong>Birth date:</strong>
      {{ currentUser.birth_date }}
    </p>
    <p class="text">
      <strong>Profile:</strong>
      {{ currentUser.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>