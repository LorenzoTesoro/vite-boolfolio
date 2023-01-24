import { createApp } from "vue";
import App from "./App.vue";
/* Import fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
/* add icons to the library */
library.add(faLinkedin, faGithub);
/* Import the router  */
import { router } from "./router";
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
