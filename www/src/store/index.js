import vue from 'vue' // var vue = require('vue')
import vuex from 'vuex'
import router from '../router'
import axios from 'axios'

let api = axios.create({
    baseURL: 'https://itunes.apple.com/search?term=', //here is the retrieval point
    timeout: 3000,
    // withCredentials: true
})

vue.use(vuex)


//above is standard
export default new vuex.Store({
    state: {
        songs: [
            {
                title: "",
                albumArt: "",
                artist: "",
                collection: "",
                price: 0,
                preview: "",
            }
        ],
//        user: {},
        playlist: [],
    },

    mutations: {
        setSongs(state, songs) {
            state.songs = songs
        },
        setPlayList(state, data) {
            state.playlist[data.postId] = data.comments
        },

        // setUser(state, user) {
        //     state.user = user
        // }
    },
    actions: {
        getSongs({ dispatch, commit }) {
            api.get('songs').then(res => {
                console.log(res)
                commit('setSongs', res.data)

            })
        },
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