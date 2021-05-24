<template>
  <div class="newPiggybank">
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Create New Piggybank</h5>
          <form @submit.prevent="submit">
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Piggybank Name</span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  name="text"
                  v-model="form.name"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Piggybank Initial Value</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  name="text"
                  v-model="form.balance"
                />
                <div class="input-group-append">
                  <span class="input-group-text">$</span>
                </div>
              </div>
            </div>
            <button class="btn btn-primary" type="submit">Submit</button>
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
import axios from "axios";
import { mapGetters } from "vuex";

const API_URL = "http://localhost:10000/";

export default {
  name: "NewPiggybank",
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  watch: {
    user: {
      handler(newVal) {
        if (newVal) {
          this.userVal = this.user;
        }
      },
      immediate: true,
    },
  },
  data() {
    return {
      myPiggybanks: [],
      userVal: null,
      form: {
        name: "",
        balance: "",
      },
      showError: false
    };
  },
  methods: {
    submit() {
      axios
        .post(API_URL + "piggybanks/" + this.user._id + "/create", {
          name: this.form.name,
          balance: this.form.balance,
          owner: this.user._id,
        })
        .then((response) => {
          this.myPiggybanks = response.data;
          this.showError = false;
          this.$router.replace({
            name: "Piggybanks",
          });
        })
        .catch((e) => {
          console.log(e)
          this.showError = true;
        });
    },
    setUserVal(user) {
      return user;
    },
  },
};
</script>