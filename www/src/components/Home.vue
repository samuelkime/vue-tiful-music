<template>
  <div class="home">
     <h1>Welcome to the Festival of Music</h1>
    <input type="text" v-model="query">
    <button @click="getSongs">Search the Songs</button>

    <h4>Search Reasults</h4>
    <div v-for="(song, index) in PlayList" :key="song.id">
      <router-link :to="{ name: 'PlayList', params: { id: index }}">{{song.title}} {{song.artist}}</router-link>    
      
      


    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      query: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
