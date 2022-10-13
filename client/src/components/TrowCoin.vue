<script>
export default {
  name: "TrowCoin",
  props: ["coin"],
//   computed : {
//     volatilitiy(){
//         if(this.coin.price_change_percentage_24h > 0){
//             return 
//         } else {
//             return 
//         }
//     }
//   }   // mau bikin red kalo minus, green kalo surplus
};
</script>

<template>
  <tr>
    <th scope="row"><img style="width: 50px" :src="coin.image" alt="" /></th>
    <td class="align-middle">{{ coin.name }}</td>
    <td class="align-middle">{{ coin.symbol }}</td>
    <td class="align-middle">{{ coin.market_cap_rank }}</td>
    <td class="align-middle">{{ coin.market_cap }}</td>
    <td class="align-middle">{{ coin.total_volume }}</td>
    <td class="align-middle">{{ coin.current_price }}</td>
    <td class="align-middle">{{ coin.price_change_percentage_24h }}%</td>
  </tr>
</template>
