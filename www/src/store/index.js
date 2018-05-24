import vue from 'vue' // var vue = require('vue')
import vuex from 'vuex'
import axios from 'axios'

let api = axios.create({
    baseURL: '//localhost:3000/api/', //here is the retrieval point
    timeout: 3000,
    // withCredentials: true
})

vue.use(vuex)


//above is standard
export default new vuex.Store({
    state: {
        posts: [
            {
                userName: "",
                title: "Best Story ever",
                body: "Kick ass story",
                imgUrl: "https://placehold.it/200x200",
                votes: 0,
                userId: "",
            }
        ],

        user: {},
        comments: {}
    },

    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
        setComments(state, data) {
            state.comments[data.postId] = data.comments
        },

        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
        getPosts({ dispatch, commit }) {
            api.get('posts').then(res => {
                console.log(res)
                commit('setPosts', res.data)

            })
        },
        getComments({ dispatch, commit},postId){
            api.get('comments/'+postId).then(res =>{
                commit('setComments', {comments:res.data, postId: postId })
            })
        },
        addPost({ dispatch, commit }, post) {
            api.post('posts', post).then(res => {
                console.log(res)
                dispatch('getPosts')
            })
        },
        addComment({ dispatch, commit }, comment) {
           console.log(comment)
            api.post('comments', comment)
                .then(res => {
                    dispatch('getComments')
                })
        },

        addUser({ dispatch, commit }, user) {
            console.log(user)
            api.post('users', user)
                .then(res => {
                    // console.log(res.data)
                    console.log(res)
                    commit('setUser', res.data)
                })
                .catch(err => {
                    console.log(err)
                })

        },
        getUser({ dispatch, commit }, user) {
            console.log(user)
            api.post('login/', user).then(res => {
                console.log(res.data)
                commit('setUser', res.data)
            })
        }
    }





})