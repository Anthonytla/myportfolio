<template>
  <div class="container">
    <h3 class="main-title">Experiences</h3>
    <ul class="list-group">
      <li
        class="row"
        v-for="(experience, index) in experiences"
        :key="index"
        @click="setActiveExperience(experience, index)"
      >
        <div class="row align-items-center" v-if="index % 2 == 1 && !experience.not_shown">
          <div class="col-md-6 flex">
            <div class='text'>
              <h3 class="title">{{ experience.title }}</h3>
              <br />
              {{ experience.description }}<br /><br />
              
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                :data-target="'#myModal' + experience._id"
              >
                Détails
              </button>
              <div
                class="modal fade"
                :id="'myModal' + experience._id"
                role="dialog"
              >
                <div class="modal-dialog">
                  <!-- Modal content-->
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">
                        &times;
                      </button>
                    </div>
                    <div class="modal-body">
                      <i style="font-size: 24px" class="fas">&#xf3c5;</i>
                      {{ experience.place }}<br />
                      <i style="font-size: 24px" class="fas">&#xf073;</i>
                      {{ experience.start_date }} - {{ experience.end_date
                      }}<br />
                      <div>
                        <i style="font-size: 24px" class="fas">&#xf46d;</i>
                        Missions: <br />
                        <ul>
                          <li
                            v-for="(task, index) in experience.tasks"
                            :key="index"
                          >
                            {{ task.description }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 center"><img :src="experience.img" /></div>
        </div>
        <div class="row align-items-center" v-if="index % 2 == 0 && !experience.not_shown">
          <div class="col-md-6 center"><img :src="experience.img" /></div>
          <div class="col-md-6 flex">
            <div class="text">
              <h3 class="title">{{ experience.title }}</h3>
              <br />
              {{ experience.description }}<br /><br />
              
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                :data-target="'#myModal' + experience._id"
              >
                Détails
              </button>
              <div
                class="modal fade"
                :id="'myModal' + experience._id"
                role="dialog"
              >
                <div class="modal-dialog">
                  <!-- Modal content-->
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">
                        &times;
                      </button>
                    </div>
                    <div class="modal-body">
                      <i style="font-size: 24px" class="fas">&#xf3c5;</i>
                      {{ experience.place }}<br />
                      <i style="font-size: 24px" class="fas">&#xf073;</i>
                      {{ experience.start_date }} - {{ experience.end_date
                      }}<br />
                      <div>
                        <i style="font-size: 24px" class="fas">&#xf46d;</i>
                        Missions: <br />
                        <ul>
                          <li
                            v-for="(task, index) in experience.tasks"
                            :key="index"
                          >
                            {{ task.description }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

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

    removeAllTutorials() {
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
  },
  mounted() {
    this.retrieveExperiences();
  },
};


</script>
