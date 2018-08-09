import Vue from 'vue'
import App from './App'

new Vue({
  // h is Vue shorthand for Vue's createElement function
  // code below is equivalent to
  //  render: function(createElement) {
  //  return createElement(App)
  //  }
  render: h => h(App)
  
})