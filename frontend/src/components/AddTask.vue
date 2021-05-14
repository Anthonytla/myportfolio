<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="task.description"
          name="description"
        />
      </div>

      <button @click="saveTask" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTask">Add</button>
    </div>
  </div>
</template>

<script>
import TaskService from "../services/taskService";
export default {
  name: "add-task",
  data() {
    return {
      task: {
        id: null,
        description: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveTask() {
      var data = {
        description: this.task.description,
      };

      TaskService.create(data, this.$route.params.experienceId)
        .then((response) => {
          this.task.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newTask() {
      this.submitted = false;
      this.task = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>