<template>
  <div class="piggybankDetail">
    <div class="container">
      <modal name="deposit-modal">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Deposit funds to this piggybank</h5>
            <form @submit.prevent="updatePiggyBalance">
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Balance</span>
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    min="0"
                    v-model="balance"
                  />
                </div>
              </div>
              <button class="btn btn-primary" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </modal>
      <modal name="withdraw-modal">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Create New Piggybank</h5>
            <form @submit.prevent="updatePiggyBalance">
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Balance</span>
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    min="0"
                    v-model="withdraw"
                  />
                </div>
              </div>
              <button class="btn btn-primary" type="submit">Submit</button>
            </form>
            <br>
            <div class="alert alert-danger" role="alert" v-if="showError" id="error">
              You can't withdraw a bigger amount than you current balance
            </div>
          </div>
        </div>
      </modal>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ myPiggybank.name }}</h5>
          <p class="card-text">${{ myPiggybank.balance }}</p>
          <p>
            <button
              type="button"
              class="btn btn-primary"
              v-on:click="showDepositModal"
            >
              Deposit
            </button>
          </p>
          <p>
            <button
              type="button"
              class="btn btn-primary"
              v-on:click="showWithdrawModal"
            >
              Withdraw
            </button>
          </p>
          <p>
            <button
              type="button"
              class="btn btn-primary"
              v-on:click="deletePiggy"
            >
              Delete
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PiggybankDetail",
  mounted() {
    this.getPiggyInfo();
  },
  data() {
    return {
      myPiggybank: "",
      balance: "",
      withdraw: "",
      showError: false,
      showWarning: false,
    };
  },
  methods: {
    getPiggyInfo() {
      let piggyId = this.$route.params.piggyId;
      axios.get("piggybanks/" + piggyId).then((response) => {
        this.myPiggybank = response.data;
      });
    },
    deletePiggy() {
      let piggyId = this.$route.params.piggyId;
      axios.delete("piggybanks/" + piggyId).then((response) => {
        console.log(response)
        this.$router.push({
          name: "Piggybanks",
        });
      });
    },
    updatePiggyBalance() {
      let piggyId = this.$route.params.piggyId;
      let newValue = this.validateValue(this.form);

      if (newValue < 0) {
        this.showError= true
      } else {
        axios
          .patch("piggybanks/" + piggyId, {
            balance: newValue,
          })
          .then((response) => {
            console.log(response)
            this.$router.go();
          });
      }
    },
    validateValue() {
      if (this.balance) {
        return Number(this.myPiggybank.balance) + Number(this.balance);
      } else if (this.withdraw) {
        return Number(this.myPiggybank.balance) - Number(this.withdraw);
      }
    },
    showDepositModal() {
      this.$modal.show("deposit-modal");
    },
    showWithdrawModal() {
      this.$modal.show("withdraw-modal");
    },
    hide() {
      this.$modal.hide("my-first-modal");
    },
  },
};
</script>