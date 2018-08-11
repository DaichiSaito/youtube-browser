<template>
  <li class="list-group-item">
    <img :src="thumbnailUrl" />
    {{ videoTitle }}
  </li>
</template>

<script>
// props:video below is the prop to be received from parent component
//  (VideoList)
// snippet.title (above in template) is a property of the indiv video
export default {
  name: 'VideoListItem',
  props: ['video'],
  computed: {
    thumbnailUrl() { // returns a thumbnail img for use in template above
      return this.video.snippet.thumbnails.default.url
    },
    videoTitle() {
      return this.video.snippet.title
    }
  }
}
</script>

<style>

</style>


