<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Projects List</h4>
      <form v-on:submit.prevent="checkProjects">
        <ul class="list-group">
          <li
            class="list-group-item project"
            :class="{ active: index == currentIndex }"
            v-for="(project, index) in projects"
            :key="index"
            @click="setActiveProject(project, index)"
          >
            <input type="checkbox" :id="project._id" />
            <label :for="project._id"></label> {{ project.title }}
          </li>
        </ul>
        <button class="m-3 btn btn-sm btn-danger">Submit checkbox</button>
      </form>

      <a class="m-3 btn btn-sm btn-danger" href="/add_project"> Add Project</a>
    </div>
    <div class="col-md-6">
      <div v-if="currentProject">
        <h4>Project</h4>
        <div>
          <label :for="currentProject._id"><strong>Title:</strong></label>
          {{ currentProject.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label>
          {{ currentProject.description }}
        </div>
        <div>
          <img :src="currentProject.img" />
        </div>

        <a
          class="badge badge-warning"
          :href="'/projects/' + currentProject._id"
        >
          Edit
        </a>
        <a class="badge badge-warning" :href="'/tasks/' + currentProject._id">
          Add task
        </a>
        <button class="badge badge-danger" :onclick="deleteProject">
          Delete
        </button>
      </div>
      <div v-else>
        <br />
        <div>Please click on a Project...</div>
      </div>
    </div>
  </div>
</template>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>

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

    deleteProject() {
      ProjectService.delete(this.currentProject._id)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
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

    checkProjects() {
      $(".project input").each(function () {
        if ($(this).is(":checked")) {
          ProjectService.update($(this).attr("id"), { enabled: true });
          $(this).attr("checked", ":checked");
        } else ProjectService.update($(this).attr("id"), { enabled: false });
      });
    },

    checkboxes() {
      for (const i of this.projects) {
        if (i.enabled) {
          var input = document.getElementById(i._id);
          input.setAttribute("checked", "checked");
        }
      }
    },
  },
  mounted() {
    this.retrieveProjects();
  },

  updated() {
    this.checkboxes();
  },
};
</script>