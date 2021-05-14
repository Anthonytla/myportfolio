<template>
  <div>
    <experiences-list-back></experiences-list-back>
    <br /><br />
    <projects-list-back></projects-list-back>
    <br /><br />
    <education-list-back></education-list-back>
    <br><br>
    <messages-list-back></messages-list-back>
  </div>
</template>

<script>
import EducationListBack from "./components/EducationListBack.vue";
import ExperiencesListBack from "./components/ExperiencesListBack.vue";
import MessagesListBack from './components/MessagesListBack.vue';
import ProjectsListBack from "./components/ProjectsListBack.vue";
export default {
  components: { ExperiencesListBack, ProjectsListBack, EducationListBack, MessagesListBack },
};
</script>

<style>
</style>