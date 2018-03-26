<template>
    <div class="columns">
    <div class="loading" v-if="loading">
      <p>Loading Brands..... </p>
    </div>
    <div class="column is-one-third"
    v-for="(photo, title) in photos"
    v-bind:key="photo.id">
      <app-photo :url="photo.url">
        <h3 slot="title" v-html="photo.title"></h3>
        <img slot="thumbnailUrl" :src="photo.thumbnailUrl"></img>
      </app-photo>
    </div>
  </div>
</template>
<script>
  import Photo from './Photo.vue'
  import appService from '../app.service.js'
  export default {
    components: {
      'app-photo': Photo
    },
    data () {
      return {
        loading: false,
        photos: null,
      }
    },
    methods: {
      loadPhotos () {
        this.photos = null
        this.loading = true
        appService.getBrands().then(data => {
          this.photos = data
          this.loading = false
        })
      }
    },
    watch: {
      '$route' : 'loadPhotos'
    },
    created () {
      // fetch the data when the view is created and the data is
      // already being observed
      this.loadPhotos()
      console.log(this.$route)
    }
  }
</script>