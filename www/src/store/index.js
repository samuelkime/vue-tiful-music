import vue from 'vue' // var vue = require('vue')
import vuex from 'vuex'
import router from '../router'
import axios from 'axios'

let api = axios.create({
    baseURL: 'https://itunes.apple.com/search?term=', //here is the retrieval point
    timeout: 3000
    // withCredentials: true
})

let srvr = axios.create({
    //baseURL: "mongodb://Samuel:test123@ds045785.mlab.com:45785/fullstack-music",
    baseURL: '//localhost:3000',
    timeout: 3000
})

vue.use(vuex)


//above is standard
export default new vuex.Store({
    state: {
        user:{},
        songs: [],
//      user: {},
        playlist: [],
    },

    mutations: {
        setSongs(state, songs) {
            state.songs = songs
        },
        // setPlayList(state, data) {
        //     state.playlist[data.postId] = data.comments
        // },
        addToPlayList(state, song){
         //   console.log(song)
            state.playlist.push(song)
            console.log(state.playlist) 
        },
        removeFromPlayList(state, song){
            state.playlist.splice(song, 1)
        },
        setPlayList(state, playlist){
            state.playlist = playlist
        },
        setUser(state, user) {
            state.user = user
        }

        // setUser(state, user) {
        //     state.user = user
        // }
    },
    actions: {
        getSongs({ dispatch, commit }, artist) {
            api.get(""+artist).then(res => {
                console.log(res.data.results)
                commit('setSongs', res.data.results)
            })
        },
        addToPlayList({dispatch, commit}, song){ //NOT COMPLETE NEEDS TO ADD THE PLAYLIST TO THE DATABASE
            var songToList = {
                title: song.trackName,
                albumArt: song.artworkUrl60,
                artist: song.artistName,
                album: song.collectionName,
                price: song.collectionPrice,
                preview: song.previewUrl,
            
            } 
            console.log(songToList)
            commit('addToPlayList', songToList)
        },
        removeFromPlayList({dispatch, commit}, song){
            commit('removeFromPlayList', song)
        },
        getPlayList({dispatch, commit}, user){//THIS WILL GET A USERS PLAYLIST BASED ON THEIR ID NEED TO FINISHED LOGIN SO THIS CAN BE DONE
            srvr.get("/api/playlists/" + user)
            .then(res=>{
                console.log(res)
             })
       },
       addUser({ dispatch, commit }, user) {
        console.log(user)
        srvr.post('/api/users', user)
            .then(res => {
                // console.log(res.data)
                console.log(res)
                commit('setUser', res.config.data)
            })
            .catch(err => {
                console.log(err)
            })
           },
        getUser({ dispatch, commit }, user) {
            console.log(user)
            srvr.post('/api/login', user).then(res => {
                console.log(res.config)
                commit('setUser', res.config.data)
            })
        }
        
        // getComments({ dispatch, commit},postId){
        //     api.get('comments/'+postId).then(res =>{
        //         commit('setComments', {comments:res.data, postId: postId })
        //     })
        // },
        // addPost({ dispatch, commit }, post) {
        //     api.post('posts', post).then(res => {
        //         console.log(res)
        //         dispatch('getPosts')
        //     })
        // },
        // addComment({ dispatch, commit }, comment) {
        //    console.log(comment)
        //     api.post('comments', comment)
        //         .then(res => {
        //             dispatch('getComments')
        //         })
        // },

        // addUser({ dispatch, commit }, user) {
        //     console.log(user)
        //     api.post('users', user)
        //         .then(res => {
        //             // console.log(res.data)
        //             console.log(res)
        //             commit('setUser', res.data)
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         })

        // },
        // getUser({ dispatch, commit }, user) {
        //     console.log(user)
        //     api.post('login/', user).then(res => {
        //         console.log(res.data)
        //         commit('setUser', res.data)
        //     })
        // }
    }





})