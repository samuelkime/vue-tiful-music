<template>
  <div class="home">
     <h1>Welcome to the Festival of Music</h1>
    <input type="text" v-model="query">
    <button @click="getSongs">Search the Songs</button>

    <h4>Search Reasults</h4>
    <div v-for="(song, index) in songs" :key="song._id">
      <router-link :to="{ name: 'Home', params: { id: index }}">{{song.artistName}}:{{song.trackName}} <img :src="song.artworkUrl100"></router-link>    
      <button @click="addToPlayList(song)"></button>
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
  },
  computed: {
    playList(){
      return this.$store.state.playlist
    },
    songs(){
      return this.$store.state.songs
    }
  },
  methods: {
    getSongs(){
      this.$store.dispatch("getSongs", this.query)
    },
    addToPlayList(song){

   }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
