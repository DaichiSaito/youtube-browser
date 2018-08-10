<template>
  <div id="app">
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar' // Make SearchBar component available to template
const API_KEY = 'API_KEY HERE'

export default {
  name: 'App',
  components: { // register any components being used
    SearchBar 
  },
  methods: {
    onTermChange(searchTerm) {
      console.log(searchTerm)
    }
  }
}
</script>

<style>

</style>
