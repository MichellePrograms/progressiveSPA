<template>
    <div class="columns">
    <div class="loading" v-if="loading">
      <p>Loading Flavors..... </p>
    </div>
    <div class="column is-one-third"
    v-for="(post, title) in posts"
    v-bind:key="post.id">
      <app-post>
        <h3 slot="title" v-html="post.title"></h3>
        <span slot="body" v-html="post.body"></span>
      </app-post>
    </div>
  </div>
</template>
<script>
  import Post from './Post.vue'
  import appService from '../app.service.js'
  export default {
    components: {
      'app-post': Post
    },
    data () {
      return {
        loading: false,
        posts: null,
        error: null
      }
    },
    methods: {
      loadPosts () {
        this.posts = null
        this.loading = true
        appService.getFlavors().then(data => {
          this.posts = data
          this.loading = false
        })
      }
    },
    watch: {
      '$route' : 'loadPosts'
    },
    created () {
      // fetch the data when the view is created and the data is
      // already being observed
      this.loadPosts()
      console.log(this.$route)
    }
  }
</script>