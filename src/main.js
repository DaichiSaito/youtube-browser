import Vue from 'vue'
import App from './App'


new Vue({
    // DOM element into which Vue should render App.vue code
    // this is an alternate to the .$mount() method used below
  // el: '#app',

    // h is Vue shorthand for Vue's createElement function
    // code below is equivalent to
    //  render: function(createElement) {
    //  return createElement(App)
    //  }
  render: h => h(App)
}).$mount('#app') // alternate method to el: '#app' property above