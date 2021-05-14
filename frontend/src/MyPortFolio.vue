<template>
  <div>
    <photo id="profile"></photo>
    <HR />
    <experiences-list id="experience"></experiences-list>
    <HR />
    <educations-list id="education"></educations-list>
    <HR />
    <skills-list id="skills"></skills-list>
  </div>
</template>

<script>
import EducationsList from "./components/EducationsList.vue";
import ExperiencesList from "./components/ExperiencesList.vue";
import SkillsList from "./components/SkillsList.vue";
import Photo from "./components/Photo.vue";
export default {
  components: { ExperiencesList, EducationsList, SkillsList, Photo },
};
</script>
