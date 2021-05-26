<template>
  <div class="piggybanks">
    <table class="table" v-if="myPiggybanks.length">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="piggybank in myPiggybanks" :key="piggybank._id">
        <td><router-link class="nav-link" :to="{ name: 'PiggybankDetail', params: { piggyId: piggybank._id }}">{{ piggybank.name }}</router-link></td>
        <td>{{ piggybank.balance }}</td>
      </tr>
      </tbody>
    </table>
    <div class="container" v-else>
      <div class="alert alert-primary" role="alert">
        You don't have Piggybanks, please create one
      </div>
      <router-link class="btn btn-primary" :to="{ name: 'NewPiggybank'}">Create New Piggybank</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from "vuex";

export default {
  name: 'Piggybanks',
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  watch: {
    'user': {
      handler (newVal) {
        if (newVal) { 
          this.getMyPiggybanks(this.user)
        }
      },
      immediate: true 
    }
  },
  data (){
    return {
      myPiggybanks: []
    }
  },
  methods: {
    getMyPiggybanks: function(user) {
        axios
        .get('users/' + user._id + '/piggybanks')
        .then(response => {
          this.myPiggybanks = response.data
        })
    }
  }
}
</script>
