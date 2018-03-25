<template>
  <div>
    <h2>The Brands</h2>
  </div>
   /*  <div class="columns">
    <div class="column is-one-third"
    v-for="(photo, title) in photos"
    v-bind:key="photo.id">
      <app-photo>
        <h3 slot="title" v-html="photo.title.rendered"></h3>
        <span slot="content" v-html="photo.body.rendered"></span>
      </app-photo>
    </div>
  </div> */
</template>
/* <script>
  import photo from './Photo.vue'
  import appService from '../app.service.js'
  export default {
    components: {
      'app-photo': photo
    },
    data () {
      return {
       photos: []
      }
    },
    methods: {
      loadPhotos () {
        appService.getBrands().then(data => {
          this.photos = data
        })
      }
    },
    watch: {
      '$route' (to, from) {
        this.loadPhotos()
      }
    },
    created () {
      this.loadPhotos()
      console.log(this.$route.query.page)
    }
  }
</script> */