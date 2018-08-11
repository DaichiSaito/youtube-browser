<template>
  <ul class="list-group">
    <VideoListItem 
      v-for="video in videos"
      :video="video"
      :key="video.etag"
    >
    </VideoListItem>
  </ul>
</template>

<script>
// In the template v-for directive, video refers to each item in the videos array
// That individual item then becomes a prop passed from the parent (this component)
//  to the child component (VideoListItem)
// video is added to child component as a prop it should expect to receive from parent
import VideoListItem from './VideoListItem' // import this component

export default {
  name: 'VideoList',
  components: {
    VideoListItem // register imported (child) components
  },
  props: {  // properties to be passed from parent
    videos: Array  // property validation, type of data to be received from parent
  } 
}
</script>

<style>

</style>


