<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="picture">Picture</label>
        <input
          type="file"
          class="form-control"
          id="picture"
          @change="onFileChange"
          required
          name="picture"
        />
      </div>

      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="project.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          class="form-control"
          id="description"
          required
          v-model="project.description"
          name="description"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="date_created">Created date</label>
        <input
          type="date"
          class="form-control"
          id="date_created"
          required
          v-model="project.date_created"
          name="date_created"
        />
      </div>

      <div class="form-group">
        <label for="date_updated">Updated Date</label>
        <input
          type="date"
          class="form-control"
          id="date_updated"
          required
          v-model="project.date_updated"
          name="date_updated"
        />
      </div>

      <button @click="saveProject" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newProject">Add</button>
    </div>
  </div>
</template>

<script>
import ProjectService from "../services/projectService";

export default {
  name: "add-project",
  data() {
    return {
      project: {
        id: null,
        picture: "",
        title: "",
        description: "",
        date_created: "",
        date_updated: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveProject() {
      var data = {
        picture: require('@/assets/' + this.project.picture),
        title: this.project.title,
        description: this.project.description,
        date_created: this.project.date_created,
        date_updated: this.project.date_updated,
      };

      ProjectService.create(data)
        .then((response) => {
          this.project.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newProject() {
      this.submitted = false;
      this.project = {};
    },

    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.project.picture = e.target.files[0].name;
    },
  },
};
</script>