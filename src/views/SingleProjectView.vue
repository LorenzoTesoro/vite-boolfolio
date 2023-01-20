<script>
import axios from "axios";
import AppBanner from "../components/AppBanner.vue";

export default {
  name: "SingleProjectView",
  components: { AppBanner },
  data() {
    return {
      project: null,
      loading: true,
      api_base_url: "http://127.0.0.1:8000",
    };
  },
  methods: {
    getImagePath(path) {
      if (path) {
        return this.base_api_url + "/storage/" + path;
      }
      return "/img/placeholder_600.png";
    },
  },
  mounted() {
    const url = this.api_base_url + "/api/projects/" + this.$route.params.slug;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        if (response.data.success) {
          this.project = response.data.results;
          this.loading = false;
        } else {
          /* TODO: handle the not found post  
          404 
          */
          // https://router.vuejs.org/guide/essentials/navigation.html#navigate-to-a-different-location
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<template>
  <AppBanner :title="$route.params.slug" />
  <div class="single-project" v-if="project">
    <div class="container">
      <img
        class="img-fluid"
        :src="getImagePath(project.cover_image)"
        :alt="project.title"
      />
      <h2>Title: {{ project.title }}</h2>
      <template v-if="project.description">
        <strong>Description:</strong>
        <span>
          {{ project.description }}
        </span>
      </template>
      <div v-else>
        <strong>Description:</strong> No description for this project
      </div>
      <div class="type">
        <strong>Type: </strong>
        <span v-if="project.type">
          {{ project.type.name }}
        </span>
        <span v-else>no types yet</span>
      </div>
      <div class="technologies">
        <strong>Technologies: </strong>
        <template v-if="project.technologies.length > 0">
          <span v-for="technology in project.technologies">
            #{{ technology.name }}
          </span>
        </template>
        <template v-else>
          <span>No Technologies yet!.</span>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  max-width: 100px;
}
</style>
