<script>
import AppBanner from "../components/AppBanner.vue";
import AppMain from "../components/AppMain.vue";

export default {
  name: "ProjectsView",
  components: { AppBanner, AppMain },
  data() {
    return {
      pageTitle: "Projects",
    };
  },
};
</script>

<template>
  <AppBanner :title="pageTitle" />
  <AppMain />
</template>

<style lang="scss" scoped>
footer {
  position: static;
}
</style>
