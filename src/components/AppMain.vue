<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";
import { store } from "../store.js";

export default {
  name: "AppMain",
  components: { ProjectCard },
  data() {
    return {
      store,
      projects: null,
      loading: true,
      error: null,
    };
  },
  methods: {
    getProjects(url) {
      // ajax call to get all projects
      axios
        .get(url)
        .then((response) => {
          console.log(response.data.results);
          this.projects = response.data.results;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error.message);
          this.error = error.message;
          this.loading = false;
        });
    },
    prevPage(url) {
      console.log(url);
      this.getProjects(url);
    },
    nextPage(url) {
      console.log(url);
      this.getProjects(url);
    },
  },
  mounted() {
    this.getProjects(this.store.api_base_url + "/api/projects");
  },
};
</script>

<template>
  <section class="vue-home pt-5">
    <div class="container">
      <template v-if="projects && !loading">
        <div class="row row-cols-1 row-cols-sm-3 g-5">
          <ProjectCard :project="project" v-for="project in projects.data" />
        </div>
        <nav
          aria-label="Page navigation"
          class="d-flex justify-content-center pt-5"
        >
          <ul class="pagination">
            <li
              class="page-item"
              v-if="projects.prev_page_url"
              @click="prevPage(projects.prev_page_url)"
            >
              <a class="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item active" aria-current="page">
              <a class="page-link" href="#">{{ projects.current_page }}</a>
            </li>

            <li
              class="page-item"
              v-if="projects.next_page_url"
              @click="nextPage(projects.next_page_url)"
            >
              <a class="page-link" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
        <!-- /.pagination_controls -->
      </template>

      <template v-else-if="loading">
        <div class="loading">
          Loading ...
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-hourglass-split"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"
            />
          </svg>
        </div>
      </template>
      <div v-else>
        <p>No projects here</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.vue-home nav {
  padding-bottom: 5rem;
}
</style>
