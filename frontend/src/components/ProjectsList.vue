<template>
  <div class="list row">
    <h3 class="main-title">Projets</h3>
    <div class="container">
      <ul class="row">
        <li
          class="row col-md-4 padd"
          v-for="(project, index) in projects"
          :key="index"
          @click="setActiveProject(project, index)"
        >
          <div class="card" style="width: 18rem" v-if="project.enabled">
            <img
              class="card-img-top"
              :src="project.picture"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <div class="card-text text">
                {{ project.description }}
              </div>
            </div>
          </div>
          <div v-else :id="project._id">Nothing</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ProjectService from "../services/projectService";

export default {
  name: "projects-list",
  data() {
    return {
      projects: [],
      currentProject: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveProjects() {
      ProjectService.getAll()
        .then((response) => {
          this.projects = response.data;
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

    setActiveProject(project, index) {
      this.currentProject = project;
      this.currentIndex = index;
    },

    removeAllTutorials() {
      ProjectService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      ProjectService.findByTitle(this.title)
        .then((response) => {
          this.projects = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    removeWhiteSpace() {
      for (const i of this.projects) {
        var whitespace = document.getElementById(i._id);
        if (whitespace) whitespace.parentNode.remove();
      }
    },
  },
  mounted() {
    this.retrieveProjects();
  },

  updated() {
    this.removeWhiteSpace();
  },
};
</script>
