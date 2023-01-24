<script>
import { store } from "../store.js";

export default {
  name: "ProjectCard",
  props: ["project"],
  data() {
    return {
      store,
      max: 10,
    };
  },
  methods: {
    /**
     *
     * @param {string} path the path to image
     */
    getImagePath(path) {
      if (path) {
        return this.store.api_base_url + "/storage/" + path;
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
    <div class="card">
      <img class="card-image" :src="getImagePath(project.cover_image)" alt="" />
      <div class="card-body">
        <h4>Title: {{ project.title }}</h4>
        <template v-if="project.source_code">
          <span>Source Code: </span><a href="#">{{ project.source_code }}</a>
        </template>
        <div v-else>No link</div>
        <template v-if="project.web_site" class="web_site">
          <span>Web Site</span><a href="#">{{ project.web_site }}</a>
        </template>
        <div v-else>No link</div>
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
      <div class="card-footer">
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

<style lang="scss" scoped>
.card {
  height: 100%;
  padding: 1rem;
  background-color: #1a2238;
  border-radius: 1rem;
  color: #f8f8fb;
  box-shadow: 0px 5px 23px -3px #1a2238;

  .web_site {
    display: block;
  }
  .card-image {
    padding: 0.5rem;
    border-radius: 1rem;
  }
  p {
    color: #f8f8fb;
  }

  .card_footer {
    color: #f8f8fb;
  }
}
</style>
