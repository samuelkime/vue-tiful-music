<template>
  <div class="home">
     <h1>Welcome to the Nutrition House</h1>
    <input type="text" v-model="query">
    <button @click="getFood">Search the foods</button>

    <h4>Search Reasults</h4>
    <div v-for="(food, index) in foodList" :key="food._id">
      <router-link :to="{ name: 'NutritionDetails', params: { id: index }}">{{food.serving_qty}} {{food.food_name}}</router-link>    
      
      calories:{{food.nf_calories}}


    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
