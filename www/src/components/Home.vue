<template>
  <div class="home">
      <div v-if="!user._id">
        <form v-on:submit.prevent="getUser">
          <input type="text" name="name" placeholder="Enter name" v-model="checkUser.userName">
          <button class="btn btn-light" type="submit">Login</button>
        </form>
        <form v-on:submit.prevent="addUser">
          <input type="text" name="name" placeholder="Enter name" v-model="newUser.userName">
          <button class="btn btn-light" type="submit">Register</button>
        </form>
      </div>
      <div v-else>
         <router-link :to="{ name: 'MusicSearch', params: { id: index }}">{{user}}</router-link>

      </div>

    <!-- <input type="text" v-model="query">
    <button @click="getSongs">Search the Songs</button>

    <h4>Search Reasults</h4>
    <button @click="getPlayList()">Go to playlist</button>
    <div v-for="(song, index) in songs" :key="song._id">
      <router-link :to="{ name: 'Home', params: { id: index }}">{{song.artistName}}:{{song.trackName}} <img :src="song.artworkUrl100"></router-link>    
      <button @click="addToPlayList(song)">Add to playlist</button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      query: '',
      newUser: {userName:''},
      checkUser: {userName:''}
    }
    
    
  },
  computed: {
    user(){
      console.log(this.$store.state.user)
      return this.$store.state.user
    },
    // playList(){
    //   return this.$store.state.playlist
    // },
    // songs(){
    //   return this.$store.state.songs
    // }
  },
  methods: {
    // getSongs(){
    //   this.$store.dispatch("getSongs", this.query)
    // },
    // addToPlayList(song){
    //   this.$store.dispatch("addToPlayList", song)
    // },
    // getPlayList(user){
    //   this.$store.dispatch("getPlayList", user)
    // },
    getUser(){
      this.$store.dispatch("getUser", this.checkUser);
    },
    addUser(){
      this.$store.dispatch("addUser", this.newUser);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
