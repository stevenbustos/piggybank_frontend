<template>
  <div class="register">
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Register</h5>
          <form @submit.prevent="submit">
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">First Name</span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  name="text"
                  v-model="form.first_name"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Last Name</span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  name="text"
                  v-model="form.last_name"
                />
              </div>
            </div>
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
            <button type="submit">Submit</button>
          </form>
          <br>
          <div class="alert alert-danger" role="alert" v-if="showError" id="error">
            You have to fill all the fields
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      },
      showError: false,
    };
  },
  methods: {
    ...mapActions({
      signup: "auth/signup",
    }),
    submit() {
      this.signup(this.form).then(() => {
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