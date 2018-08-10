<template>
  <div id="app">
    <SearchBar></SearchBar>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar' // Make SearchBar component available to template

export default {
  name: 'App',
  components: { // register any components being used
    SearchBar 
  }
}
</script>

<style>

</style>
