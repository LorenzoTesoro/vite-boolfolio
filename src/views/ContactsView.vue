<script>
import AppBanner from "../components/AppBanner.vue";
import axios from "axios";
import { store } from "../store.js";

export default {
  name: "ContactsView",
  components: { AppBanner },
  data() {
    return {
      store,
      name: "",
      email: "",
      message: "",
      success: false,
      loading: false,
      errors: {},
    };
  },
  methods: {
    sendForm() {
      this.loading = true;

      this.errors = {};

      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      axios
        .post(`${this.store.api_base_url}/api/contacts`, data)
        .then((response) => {
          this.success = response.data.success;

          console.log(response);

          if (this.success) {
            this.name = "";
            this.email = "";
            this.message = "";
          } else {
            this.errors = response.data.errors;
          }

          this.loading = false;
        });
    },
  },
};
</script>

<template>
  <AppBanner title="Contacts Page" />
  <div class="container pt-2">
    <p class="lead">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, adipisci
      optio, tempore maiores sit asperiores sed est nulla esse quos quam
      laudantium, voluptatibus minus officiis assumenda. Ex vitae eos earum.
    </p>

    <form @submit.prevent="sendForm()">
      <div class="mb-3">
        <label for="" class="form-label">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="name"
          class="form-control"
          placeholder="Mario Rossi"
          aria-describedby="fullNameHelper"
        />

        <p v-for="error in errors.name">
          {{ error }}
        </p>

        <small id="fullNameHelper" class="text-muted">Add your full name</small>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          class="form-control"
          placeholder="mario.rossi@example.com"
          aria-describedby="emailHelper"
        />

        <p v-for="error in errors.email">
          {{ error }}
        </p>

        <small id="emailHelper" class="text-muted"
          >Add your email address</small
        >
      </div>

      <div class="mb-3">
        <label for="" class="form-label">Message</label>
        <textarea
          class="form-control"
          name="message"
          id="message"
          v-model="message"
          rows="5"
        ></textarea>

        <p v-for="error in errors.message">
          {{ error }}
        </p>
      </div>

      <button type="submit" class="btn btn-primary" :disabled="loading">
        {{ loading ? "Sending..." : "Contact me" }}
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
