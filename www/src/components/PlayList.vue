<template>
  <div class="home">
   
   <div v-for="song in playList" :key="song._id"> 
      {{song.artistName}}
   </div>
    
  </div>
</template>

<script>
export default {
  name: 'PlayList',
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
      console.log(this.$store.state.playlist)
      return this.$store.state.playlist
    },
},
  methods: {
   removeTrack(){},
   promoteTrack(){},
   demotreTracks(){},

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
