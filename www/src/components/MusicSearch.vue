<template>
  <div class="home">
    <div class="container">
      
      <div class="row d-flex justify-content-center">
        <h4>Favorites Playlist</h4>
      </div>
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
      <div class="row d-flex justify-content-center">
          <input type="text" v-model="query">
          <button @click="getSongs">Find an Artist</button>
        </div>
      <div class="row d-flex justify-content-center">
          <h4>Search Reasults</h4>
      </div>
      <div class="row d-flex justify-content-center">
        <div v-for="(song, index) in songs" :key="song._id">
          <div id="outline" class="col-9 offset-md-1">
            <div class="row">
              <div class="col d-flex justify-content-center">
                <span class="border border-dark">
                  <img :src="song.artworkUrl100">
                </span>
              </div>
              <div class="col d-flex flex-column justify-content-start">
                <h5 class="truncate">Song: {{song.title}}</h5>
                <h5 class="truncate">Artist: {{song.artistName}} </h5>
                <h6 class="truncate">Album: {{song.collectionName}}</h6>
                <h6>Price: ${{song.trackPrice}}</h6>
              </div>
            </div>
            <div class="row d-flex justify-content-center">
              <audio controls>
                <source :src="song.preview" type="audio/mpeg">
                </audio>
                <button @click="addToPlayList(song)">Add to playlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'MusicSearch',
    data() {
      return {
        song: {
          userUpVotes: 0,
          userDownVotes: 0,
        },
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
        //console.log(this.$store.state.playlist)
        return this.$store.state.playlist
      },
      songs() {
        return this.$store.state.songs
      }
    },
    methods: {
      getSongs() {
        this.$store.dispatch("getSongs", this.query)
      },
      addToPlayList(song) {
        this.$store.dispatch("addToPlayList", song)
      },
      getPlayList(user) {
        this.$store.dispatch("getPlayList", user)
      },
      removeFromPlayList(song) {
        this.$store.dispatch("removeFromPlayList", song)
      },
      promoteSong(song) {
        this.$store.dispatch("upSong", song)
      },
      demoteSong() { }
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
  #outline {
    border: black solid 1px;
    background-color: darkturquoise
  };
  .truncate {
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>