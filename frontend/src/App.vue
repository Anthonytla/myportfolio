<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/myportfolio" class="navbar-brand"
        >Anthony LA</router-link
      >
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/admin" class="nav-link">Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link">Projets</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
      </div>
      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" />Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
        </li>
      </div>
      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
      </div>
    </nav>

    <div class="body2">
      <div class="card2 text-white">
        <div class="multi-button">
          <button
            class="fa fa-user"
            onclick="window.location.href='#monProfil'"
            aria-hidden="true"
          ></button>
          <button
            class="fa fa-cogs"
            onclick="window.location.href='#skills'"
            aria-hidden="true"
          ></button>
          <button
            class="fa fa-briefcase"
            onclick="window.location.href='#experience'"
          ></button>
          <button
            class="fa fa-book"
            onclick="window.location.href='#education'"
            aria-hidden="true"
          ></button>
        </div>

        <div class="container" style="text-align: center">
          MON PORTFOLIO <br />
          C'EST PAR ICI
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <router-view />
    </div>
    <footer class="bg-dark text-center text-lg-start">
      <div style="display: flex; justify-content: space-around">
        <div class="text-white">
          <h5 style="padding: 30px">Plan du site</h5>
          <ul class="list">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                /></svg
              ><a href="#" v-scroll-to="'#profile'">Profil</a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-briefcase"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"
                /></svg
              ><a href="#" v-scroll-to="'#experience'">Expérience</a>
            </li>

            <li>
              <i class="fas fa-graduation-cap" style="margin-right: 5px"></i>

              <a href="#" v-scroll-to="'#education'">Education</a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-gear"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
                />
                <path
                  d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
                />
              </svg>
              <a href="#" v-scroll-to="'#skills'">Compétences</a>
            </li>
          </ul>
        </div>
        <div class="text-white">
          <h5 style="padding: 30px">Contact</h5>
          <ul class="list">
            <li>
              <i class="fab fa-linkedin"></i>
              <a
                href="https://www.linkedin.com/in/thua-du-anthony-la
"
                >Linkedin</a
              >
            </li>
            <li>
              <i class="fab fa-github"></i
              ><a href="https://github.com/Anthonytla">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Copyright -->
      <div class="text-center p-3 text-white">© 2020 Copyright</div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<style>
@import "./assets/style.css";
</style>
<script>
import router from "./router.js";
export default {
  name: "app",
  router,
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>
