<template>
  <div id="app">
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar' // Make SearchBar component available to template

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
