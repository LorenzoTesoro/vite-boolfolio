<script>
export default {
  name: "AppFooter",
  data() {
    return {
      icons: ["facebook", "instagram", "pinterest", "twitter"],
    };
  },
};
</script>
<template>
  <footer>
    <div class="container">
      <div class="icon" v-for="icon in icons">
        <font-awesome-icon :icon="`fa-brands fa-${icon}`" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: #1a2238;
  color: #f8f8fb;
  height: 70px;
  position: fixed;
  bottom: 0;
  width: 100%;
  .container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    height: 100%;
    align-items: center;

    .icon {
      font-size: 1.5rem;

      &:hover {
        color: #ff6900;
        cursor: pointer;
      }
    }
  }
}
</style>
