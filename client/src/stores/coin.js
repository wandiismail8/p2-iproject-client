import { defineStore } from 'pinia'
import axios from 'axios'


const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=70&page=1&sparkline=false"



export const useCoinStore = defineStore('coin', {
    state: () => {
        return {
            coins : []


         }

        },
    getters: {
     
    },
    actions: {
        async fetchCoin(){
            try {
                const{ data }= await axios({
                    url : url,
                    method : "GET"
                })
                console.log(data);
                this.coins = data


                
            } catch (err) {
                console.log(err);
                
            }
        }

      
    },
  })