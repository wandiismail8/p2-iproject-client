<script>
import { mapActions, mapState } from 'pinia';
import { useCoinStore } from '../stores/coin';
import TrowCoin from '../components/TrowCoin.vue';

export default {
    name: "HomeView",
    methods: {
        ...mapActions(useCoinStore, ["fetchCoin"])
    },
    computed: {
        ...mapState(useCoinStore, ["coins"])
    },
    created() {
        this.fetchCoin();
    },
    components: { TrowCoin }
}



</script>

<template>

<h1 class="text-5xl font-bold text-center mb-5">Coin List</h1>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Logo</th>
          <th scope="col">Name</th>
          <th scope="col">Symbol</th>
          <th scope="col">Rank</th>


          <th scope="col">Market Cap</th>
          <th scope="col">Volume</th>
          <th scope="col">Current Price</th>
          <th scope="col">Volatility</th>
        </tr>
      </thead>
      <tbody >
        <TrowCoin v-for="coin in coins" :key="coin.id" :coin="coin" /> 
      </tbody>
    </table>




  </div>
</template>
