<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">App Home</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" v-if="authenticated">
          <li class="nav-item active">
            <router-link class="nav-link" to="/piggybanks">Piggybanks</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" :to="{ name: 'NewPiggybank'}">Create New Piggybank</router-link>
          </li>
        </ul>
        <div v-if="authenticated">
          <span class="navbar-text">
            {{ user.first_name }} 
            {{ user.last_name }} |
            {{ user.email }} 
          </span>
          <button class="btn btn-outline-success my-2 my-sm-0" @click.prevent="logout">Logout</button>
        </div>
        <ul class="navbar-nav mr-auto" v-else>
          <li class="nav-item active">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {
    ...mapActions({
      logOut: 'auth/logout'
    }),
    logout() {
      this.logOut().then(() => {
        this.$router.replace({
          name: 'Home'
        })
      })
    },
  },
};
</script>