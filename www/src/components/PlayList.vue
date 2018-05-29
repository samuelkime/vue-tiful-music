<template>
  <div class="home">
    <div v-for="song in playList" :key="song._id">
      <div class="row d-flex justify-content-center">
        <div v-for="song in playList" :key="song._id">
          <div id="outline" class="col-10">
            <h5 class="truncate">Song: {{song.title}}</h5>
            <h5 class="truncate">Artist: {{song.artist}} </h5>
            <h6 class="truncate">Album: {{song.album}}</h6>
            <h6>Price: ${{song.price}}</h6>
            <a @click="promoteSong(song)">
              <p>upvotes: {{song.userUpVotes}}</p>
            </a>
            <p>downvotes: {{songs.userDownVotes}}</p>
            <span @click="removeFromPlayList(song)">X</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <router-link to="MusicSearch"><button>Back to Search</button></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PlayList',
    data() {
      return {
        query: '',
        newUser: { userName: '' },
        checkUser: { userName: '' }
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      playList() {
        console.log(this.$store.state.playlist)
        return this.$store.state.playlist
      },
      songs() {
        return this.$store.state.songs
      }
    },
    methods: {
      getPlayList(user) {
        this.$store.dispatch("getPlayList", user)
      },
      removeFromPlayList(song) {
        this.$store.dispatch("removeFromPlayList", song)
      },
      // removeTrack() { },
      // promoteTrack() { },
      // demotreTracks() { },

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>