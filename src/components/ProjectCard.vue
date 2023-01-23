<script>
import { store } from "../store.js";

export default {
  name: "ProjectCard",
  props: ["project"],
  data() {
    return {
      store,
      max: 100,
    };
  },
  methods: {
    /**
     *
     * @param {string} path the path to image
     */
    getImagePath(path) {
      if (path) {
        return this.base_api_url + "/storage/" + path;
      }
      return "/img/placeholder_600.png";
    },
    /**
     *
     * @param {string} text the project description
     */
    trimDescription(text) {
      if (text.length > this.max) {
        return text.slice(0, this.max) + "...";
      }
      return text;
    },
  },
};
</script>

<template>
  <div class="col">
    <div class="card border-0 shadow-sm rounded-0 rounded-bottom">
      <img
        class="card-image rounded-top"
        :src="getImagePath(project.cover_image)"
        alt=""
      />
      <div class="card-body">
        <h4>{{ project.title }}</h4>
        <template v-if="project.description">
          <p>
            {{ trimDescription(project.description) }}
          </p>
          <router-link
            :to="{ name: 'single-project', params: { slug: project.slug } }"
            >Read more</router-link
          >
        </template>
        <div v-else>No description for this project</div>
      </div>
      <div class="card-footer text-muted">
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
  </div>
</template>
