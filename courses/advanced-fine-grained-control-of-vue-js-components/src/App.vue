<template>
  <div @click="onClick">
    {{message}}
  </div>
</template>

<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({})
  export default class App extends Vue {
    message = 'Hello from class'

    onClick() {
      this.message = "Good Bye!"
    }
  }
  // export default Component({})(
  //   class App extends Vue {
  //     message = 'Hello from class.'
  //   }
  // )

  // export default {
  //   data() {
  //     return {
  //       message: "Hello"
  //     }
  //   },
  //   methods: {
  //     onClick() {
  //       this.message = "Good bye!"
  //     }
  //   }
  // }
</script>

<style>

</style>
