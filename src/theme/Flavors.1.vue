<template>
  <div>
    <h2>The Brands</h2>
  </div>
    /* <div class="columns">
    <div class="column is-one-third"
    v-for="(post, title) in posts"
    v-bind:key="post.id">
      <app-post>
        <h3 slot="title" v-html="post.title.rendered"></h3>
        <span slot="content" v-html="post.body.rendered"></span>
      </app-post>
    </div>
  </div> */
</template>
/* <script>
  import Post from './Post.vue'
  import appService from '../app.service.js'
  export default {
    components: {
      'app-post': Post
    },
    data () {
      return {
        posts: []
      }
    },
    methods: {
      loadPosts () {
        appService.getFlavors().then(data => {
          this.posts = data
        })
      }
    },
    watch: {
      '$route' (to, from) {
        this.loadPosts()
      }
    },
    created () {
      this.loadPosts()
      console.log(this.$route.query.page)
    }
  }
</script> */