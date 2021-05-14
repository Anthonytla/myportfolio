<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Educations List</h4>
      <form v-on:submit="checkEducations">
        <ul class="list-group">
          <li
            class="list-group-item education"
            :class="{ active: index == currentIndex }"
            v-for="(education, index) in educations"
            :key="index"
            @click="setActiveEducation(education, index)"
          >
            <input type="checkbox" :id="education._id" />
            <label :for="education._id"></label> {{ education.school }}
          </li>
        </ul>
        <button class="m-3 btn btn-sm btn-danger">Submit checkbox</button>
      </form>

      <a class="m-3 btn btn-sm btn-danger" href="/add_education"> Add Education</a>
    </div>
    <div class="col-md-6">
      <div v-if="currentEducation">
        <h4>Education</h4>
        <div>
          <label :for="currentEducation._id"><strong>School:</strong></label>
          {{ currentEducation.School }}
        </div>
        <div>
          <label><strong>Description:</strong></label>
          {{ currentEducation.description }}
        </div>
        <div>
          <img :src="currentEducation.img" />
        </div>

        <a
          class="badge badge-warning"
          :href="'/educations/' + currentEducation._id"
        >
          Edit
        </a>
        <a
          class="badge badge-warning"
          :href="'/tasks/' + currentEducation._id"
        >
          Add task
        </a>
      </div>
      <div v-else>
        <br />
        <div>Please click on a Education...</div>
      </div>
    </div>
  </div>
</template>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>

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
          console.log(response.data);
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

    removeAllEducations() {
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

    checkEducations() {
      $(".education input").each(function () {
        if ($(this).is(":checked")) {
          EducationService.update($(this).attr("id"), { not_shown: true });
          $(this).attr("checked", ":checked");
        } else EducationService.update($(this).attr("id"), { not_shown: false });
      });
    },

    checkboxes() {
      for (const i of this.educations) {
        if (i.not_shown) {
          var input = document.getElementById(i._id);
          input.setAttribute("checked", "checked");
        }
      }
    },
  },
  mounted() {
    this.retrieveEducations();
  },

  updated() {
    this.checkboxes();
  }
};
</script>
