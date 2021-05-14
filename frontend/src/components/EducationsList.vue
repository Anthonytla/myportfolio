<template>
  <div class="container">
    <h3 class="main-title">Educations</h3>
    <ul class="list-group">
      <li
        class="row"
        v-for="(education, index) in educations"
        :key="index"
        @click="setActiveEducation(education, index)"
      >
        <div
          class="row align-items-center"
          v-if="index % 2 == 1 && !education.not_shown"
        >
          <div class="col-md-6 flex">
            <div class="text">
              <h2>{{ education.degree }}</h2>
              <br />
              <h3 class="title">{{ education.school }}</h3><br>
              <i>{{ education.start_date }} - {{ education.end_date }}</i>
              <br />
              {{ education.description }}<br /><br />
            </div>
          </div>
          <div class="col-md-6 center"><img :src="education.img" /></div>
        </div>
        <div
          class="row align-items-center"
          v-if="index % 2 == 0 && !education.not_shown"
        >
          <div class="col-md-6 center"><img :src="education.img" /></div>
          <div class="col-md-6 flex">
            <div class="text">
              <h2>{{ education.degree }}</h2>
              <br />
              <h3 class="title">{{ education.school }}</h3><br>
              <i>{{ education.start_date }} - {{ education.end_date }}</i>
              <br />
              {{ education.description }}<br /><br />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import EducationService from "../services/educationService";

export default {
  name: "educations-list",
  data() {
    return {
      educations: [],
      currentEducation: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveEducations() {
      EducationService.getAll()
        .then((response) => {
          this.educations = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveEducation(education, index) {
      this.currentEducation = education;
      this.currentIndex = index;
    },

    removeAllTutorials() {
      EducationService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      EducationService.findByTitle(this.title)
        .then((response) => {
          this.educations = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    removeWhiteSpace() {
      for (const i of this.educations) {
        var whitespace = document.getElementById(i._id);
        if (whitespace) whitespace.parentNode.remove();
      }
    },
  },
  mounted() {
    this.retrieveEducations();
  },

  updated() {
    this.removeWhiteSpace();
  },
};
</script>
