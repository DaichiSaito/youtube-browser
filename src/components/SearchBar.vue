<template>
  <div class="search">
    <input @input="onInput" class="user-input"/>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput: function(e) {
      let searchTerm = e.target.value
      this.$emit('termChange', searchTerm) // $ sign is insignificant, no functionality, just Vue convention
    }
  }
}
</script>

<style>
  .user-input {
    width: 75%;
  }
  .search {
    text-align: center;
    margin: 20px;
  }
</style>
