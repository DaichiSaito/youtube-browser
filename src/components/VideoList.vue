<template>
  <ul>
    VideoList
    {{ videos.length }}
  </ul>
</template>

<script>

import VideoListItem from './VideoListItem' // import this component

export default {
  name: 'VideoList',
  components: {
    VideoListItem // register imported components
  },
  props: {  // properties to be passed from parent
    videos: Array  // property validation, type of data to be received from parent
  } 
}
</script>

<style>

</style>


