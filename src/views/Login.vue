<template>
  <div class="login">
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Login</h5>
          <form @submit.prevent="submit">
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Email</span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  name="email"
                  v-model="form.email"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Password</span>
                </div>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  v-model="form.password"
                />
              </div>
            </div>
            <button class="btn btn-primary" type="submit">Submit</button>
          </form>
          <br>
          <div class="alert alert-danger" role="alert" v-if="showError" id="error">
            Email or Password is incorrect
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showError: false,
    };
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    submit() {
      this.login(this.form).then(() => {
        this.$router.replace({
          name: "Piggybanks",
        });
      }).catch((e) => {
        console.log(e)
        this.showError = true
      })
    },
  },
};
</script>