<script>
export default {
  name: "AppNav",
  data() {
    return {
      nav_links: ["home", "about", "projects", "contacts"],
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-sm border-bottom">
    <div class="container">
      <a class="navbar-brand" href="/">Boolfolio</a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
        aria-controls="mainNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto mt-lg-0">
          <li class="nav-item" v-for="nav_link in nav_links">
            <router-link
              class="nav-link"
              :to="{ name: nav_link }"
              aria-current="page"
              >{{ nav_link
              }}<span class="visually-hidden">(current)</span></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  height: 70px;
  background-color: #1a2238;

  a {
    color: #f8f8fb;
    text-transform: uppercase;
  }
  a.navbar-brand {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    text-decoration: none;
    &:hover {
      color: #f8f8fb;
    }
  }

  li a {
    font-size: 1.2rem;

    &:hover {
      color: #ff6900;
    }
  }
}
</style>
