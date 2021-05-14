<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="img">Image</label>
        <input
          type="file"
          class="form-control"
          id="img"
          @change="onFileChange"
          required
          name="img"
        />
      </div>

      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="experience.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control"
          id="description"
          type="textarea"
          required
          v-model="experience.description"
          name="description"></textarea>
      </div>

      <div class="form-group">
        <label for="start_date">Start date</label>
        <input
          type="date"
          class="form-control"
          id="start_date"
          required
          v-model="experience.start_date"
          name="start_date"
        />
      </div>

      <div class="form-group">
        <label for="end_date">End date</label>
        <input
          type="date"
          class="form-control"
          id="end_date"
          required
          v-model="experience.end_date"
          name="end_date"
        />
      </div>

      <div class="form-group">
        <label for="place">Place</label>
        <input
          type="string"
          class="form-control"
          id="place"
          required
          v-model="experience.place"
          name="place"
        />
      </div>

      <button @click="saveExperience" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newExperience">Add</button>
    </div>
  </div>
</template>

<script>
import ExperienceService from "../services/experienceService";

export default {
  name: "add-experience",
  data() {
    return {
      experience: {
        id: null,
        img: "",
        title: "",
        description: "",
        start_date: "",
        end_date: "",
        place: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveExperience() {
      console.log(this.experience.start_date);
      var data = {
        img: require('@/assets/' + this.experience.img),
        title: this.experience.title,
        description: this.experience.description,
        start_date: this.experience.start_date,
        end_date: this.experience.end_date,
        place: this.experience.place,
      };
      console.log(data);

      ExperienceService.create(data)
        .then((response) => {
          this.experience.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newExperience() {
      this.submitted = false;
      this.experience = {};
    },

    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.experience.img = e.target.files[0].name;
      console.log(this.experience.img);
      // this.createImage(files[0]);
    },
    createImage(file) {
      //var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
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