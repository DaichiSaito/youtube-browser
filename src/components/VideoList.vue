<template>
  <ul>
    VideoList
    {{ videos.length }}
  </ul>
</template>

<script>
export default {
  name: 'VideoList',
  props: {  // properties to be passed from parent
    videos: Array  // property validation, type of data to be received from parent
  } 
}
</script>

<style>

</style>


