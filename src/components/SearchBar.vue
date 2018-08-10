<template>
  <div class="search">
    <input @input="onInput"/>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput: function(e) {
      let inputValue = e.target.value
      this.$emit('termChange', inputValue) // $ sign is insignificant, no functionality, just Vue convention
    }
  }
}
</script>

<style>

</style>
