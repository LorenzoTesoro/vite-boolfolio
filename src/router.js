// 1 Import from vue-router createRouter and createWebHistory
import { createRouter, createWebHistory } from "vue-router";

// Import all components to pass to the routes
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import ContactsView from "./views/ContactsView.vue";
import SingleProjectView from "./views/SingleProjectView.vue";
import NotFoundView from "./views/NotFoundView.vue";

// 2 define routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    /* All routes here */
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactsView,
    },
    {
      path: "/projects/:slug",
      name: "single-project",
      component: SingleProjectView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

// 3. export the router
export { router };
