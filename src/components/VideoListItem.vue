<template>
  <li class="list-group-item">
    <img :src="video.snippet.thumbnails.default.url" />
    {{ video.snippet.title }}
  </li>
</template>

<script>
// props:video below is the prop to be received from parent component
//  (VideoList)
// snippet.title (above in template) is a property of the indiv video
export default {
  name: 'VideoListItem',
  props: ['video']
}
</script>

<style>

</style>


