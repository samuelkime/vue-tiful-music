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
            state.playlist.push(song) 
        },
        setPlayList(state, playlist){
            state.playlist = playlist
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
        addToPlayList({dispatch, commit}, song){
            console.log(song)
            commit('addToPlayList', song)
        },
        getPlayList({dispatch, commit}, user){//NOT COMPELTE KEEP MESSING WITH THIS
            srvr.get("/api/playlists/" + user)
            .then(res=>{
                console.log(res)
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