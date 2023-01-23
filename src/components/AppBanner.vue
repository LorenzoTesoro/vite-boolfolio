<script>
export default {
  name: "AppBanner",
  props: ["title"],
};
</script>

<template>
  <div class="banner">
    <div class="container pt-3">
      <h1 class="py-4">{{ title }}</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
