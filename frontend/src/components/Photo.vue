<template>
  <div class="container">
    <h3 class="main-title">Profil</h3>
    <div class="flex" style="gap: px">
      <img
        src="../assets/myportfolio_public_Picture9.jpg"
        width="500"
        height="300"
      />
      <div>
        <strong>Profil</strong>:<br /><br />
        Je m'appelle Thua Du Anthony LA, étudiant en cycle bachelor à l'ETNA.
        Passionné de l'informatique, j'éprouve une soif d'apprendre de nouvelles
        technologies de web. Pour la rentrée 2021, je suis à la recherche d'une
        entreprise en alternance pour compléter ma formation et pour y intégrer
        à long terme.<br />
        Mes expériences professionnelles ont développé mes capacité d'adaptation
        aux nouveaux rythmes et de nouvelles environnments de travail<br /><br />
        <strong>Ce que je cherche</strong>:<br /><br />
        Une alternance de développement web avec des frameworks de Javascript
        notamment VueJS. Cette alternance sera une occasion pour moi de mettre
        en pratique des connaissances acquises et m'aiguiser sur ces technos en
        vue de pouvoir participer à des projets ambitieux.<br /><br />
        <strong>La reconversion professionnelles:</strong><br /><br />
        Titulaire d'un master de physique, j'ai pu découvrir l'importance de
        l'informatique dans la société actuelle et veut donc me réorienter vers
        ce domaine en plein essor.
      </div>
    </div>
  </div>
</template>

<script>
import User from "../models/user";
export default {
  data() {
    return { user: new User() };
  },

  methods: {
    retrieveUser() {
      this.user = this.$store.state.auth.user;
    },
  },
  mounted() {
    this.retrieveUser();
  },
};
</script>

<style>
</style>