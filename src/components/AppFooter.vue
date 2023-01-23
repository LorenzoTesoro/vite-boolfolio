<script>
export default {
  name: "AppFooter",
};
</script>
<template>
  <footer>
    <div class="container">
      <div class="icon"><font-awesome-icon icon="fa-brands fa-facebook" /></div>
      <div class="icon">
        <font-awesome-icon icon="fa-brands fa-instagram" />
      </div>
      <div class="icon">
        <font-awesome-icon icon="fa-brands fa-pinterest" />
      </div>
      <div class="icon"><font-awesome-icon icon="fa-brands fa-twitter" /></div>
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
