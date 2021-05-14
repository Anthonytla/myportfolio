<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Experiences List</h4>
      <form v-on:submit="checkExperiences">
        <ul class="list-group">
          <li
            class="list-group-item experience"
            :class="{ active: index == currentIndex }"
            v-for="(experience, index) in experiences"
            :key="index"
            @click="setActiveExperience(experience, index)"
          >
            <input type="checkbox" :id="experience._id" />
            <label :for="experience._id"></label> {{ experience.title }}
          </li>
        </ul>
        <button class="m-3 btn btn-sm btn-danger">Submit checkbox</button>
      </form>

      <a class="m-3 btn btn-sm btn-danger" href="/add"> Add Experience</a>
    </div>
    <div class="col-md-6">
      <div v-if="currentExperience">
        <h4>Experience</h4>
        <div>
          <label :for="currentExperience._id"><strong>Title:</strong></label>
          {{ currentExperience.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label>
          {{ currentExperience.description }}
        </div>
        <div>
          <img :src="currentExperience.img" />
        </div>

        <a
          class="badge badge-warning"
          :href="'/experiences/' + currentExperience._id"
        >
          Edit
        </a>
        <a
          class="badge badge-warning"
          :href="'/tasks/' + currentExperience._id"
        >
          Add task
        </a>
      </div>
      <div v-else>
        <br />
        <div>Please click on a Experience...</div>
      </div>
    </div>
  </div>
</template>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>

<script>
import ExperienceService from "../services/experienceService";

export default {
  name: "experiences-list",
  data() {
    return {
      experiences: [],
      currentExperience: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveExperiences() {
      ExperienceService.getAll()
        .then((response) => {
          this.experiences = response.data;
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

    setActiveExperience(experience, index) {
      this.currentExperience = experience;
      this.currentIndex = index;
    },

    removeAllExperiences() {
      ExperienceService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      ExperienceService.findByTitle(this.title)
        .then((response) => {
          this.experiences = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    checkExperiences() {
      $(".experience input").each(function () {
        if ($(this).is(":checked")) {
          ExperienceService.update($(this).attr("id"), { not_shown: true });
          $(this).attr("checked", ":checked");
        } else ExperienceService.update($(this).attr("id"), { not_shown: false });
      });
    },

    checkboxes() {
      for (const i of this.experiences) {
        if (i.not_shown) {
          var input = document.getElementById(i._id);
          input.setAttribute("checked", "checked");
        }
      }
    },
  },
  mounted() {
    this.retrieveExperiences();
  },

  updated() {
    this.checkboxes();
  }
};
</script>
