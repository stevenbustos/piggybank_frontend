<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <span v-if="authenticated">
      <router-link to="/piggybanks">Piggybanks</router-link> |
      <span> {{ user.first_name }} </span>
      <span> {{ user.last_name }} </span>
      <span> {{ user.email }} </span>
      <button @click.prevent="logout">Logout</button>
    </span>
    <span v-else>
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
    </span>
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

<style>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
a:hover {
  cursor: pointer;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>