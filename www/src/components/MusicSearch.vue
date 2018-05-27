<template>
  <div class="home">
    <input type="text" v-model="query">
    <button @click="getSongs">Search the Songs</button>

    <h4>Search Reasults</h4>
    <button @click="getPlayList()">Go to playlist</button>
    <div v-for="song in playList" :key="song._id"> 
      {{song.artistName}} <span @click="removeFromPlayList(song)">X</span>
      </div>
    <div v-for="(song, index) in songs" :key="song._id">
      <router-link :to="{ name: 'Home', params: { id: index }}">{{song.artistName}}:{{song.trackName}} <img :src="song.artworkUrl100"></router-link>    
      <button @click="addToPlayList(song)">Add to playlist</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicSearch',
  data () {
    return {
      query: '',
      newUser: {userName:''},
      checkUser: {userName:''}
    }
    
    
  },
  computed: {
    user(){
      return this.$store.state.user
    },
    playList(){
      //console.log(this.$store.state.playlist)
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
      this.$store.dispatch("addToPlayList", song)
    },
    getPlayList(user){
      this.$store.dispatch("getPlayList", user)
    },
    removeFromPlayList(song){
      this.$store.dispatch("removeFromPlayList", song)
    },
    promoteSong(song){
      this.$store.dispatch("promoteSong", song)
    },
    demoteSong(){}
    // getUser(){
    //   this.$store.dispatch("getUser", this.checkeUser);
    // },
    // addUser(){
    //   this.$store.dispatch("addUser", this.newUser);
    // }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
