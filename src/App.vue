<template>
  <div id="app">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoList></VideoList>
    {{ videos.length }}
  </div>
</template>

<script>
import axios from 'axios' // library for processing search
import SearchBar from './components/SearchBar' // Make SearchBar component available to template
import VideoList from './components/VideoList' // Make VideoList component available


const API_KEY = 'API_KEY_HERE'

export default {
  name: 'App',
  components: { // register any components being used
    SearchBar,
    VideoList
  },
  data() { // in a component, the data property must be a function that returns and object
    return {
      videos: []
    }
  },
  methods: {
    onTermChange(searchTerm) {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video', // type of data to retrieve
          part: 'snippet', // ask for a small portion of each video returned in search
          q: searchTerm // q = query, which will be the searchTerm passed to the method
        }
      }) // returns a promise, so
      .then(response => {
        this.videos = response.data.items //data property of RESPONSE, items property of data
        // console.log(this.videos)
      })
    }
  }
}
</script>

<style>

</style>
