<template>
  <div class="search">
    <input v-on:input="onInput"/>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput: function(e) {
      console.log(e.target.value)
    }
  }
}
</script>

<style>

</style>
