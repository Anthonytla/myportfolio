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
        <label for="school">School</label>
        <input
          type="string"
          class="form-control"
          id="school"
          required
          v-model="education.school"
          name="school"
        />
      </div>

      <div class="form-group">
        <label for="degree">Degree</label>
        <input
          class="form-control"
          id="degree"
          required
          v-model="education.degree"
          name="degree"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          class="form-control"
          id="description"
          required
          v-model="education.description"
          name="description"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="start_date">Start date</label>
        <input
          type="date"
          class="form-control"
          id="start_date"
          required
          v-model="education.start_date"
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
          v-model="education.end_date"
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
          v-model="education.place"
          name="place"
        />
      </div>

      <button @click="saveEducation" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newEducation">Add</button>
    </div>
  </div>
</template>

<script>
import EducationService from "../services/educationService";

export default {
  name: "add-education",
  data() {
    return {
      education: {
        id: null,
        img: "",
        school: "",
        degree: "",
        description: "",
        start_date: "",
        end_date: "",
        place: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveEducation() {
      console.log(this.education.start_date);
      var data = {
        img: require('@/assets/' + this.education.img),
        school: this.education.school,
        degree: this.education.degree,
        description: this.education.description,
        start_date: this.education.start_date,
        end_date: this.education.end_date,
        place: this.education.place,
      };
      console.log(data);

      EducationService.create(data)
        .then((response) => {
          this.education.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newEducation() {
      this.submitted = false;
      this.education = {};
    },

    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.education.img = e.target.files[0].name;
      console.log(this.education.img);
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