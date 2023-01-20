<script>

import ProjectCard from './ProjectCard.vue';

export default{
  name:'AppMain',
  components: {ProjectCard}
}

</script>

<template>
  <section class="vue-home pt-5">
    <div class="container">
      <ProjectCard/>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
