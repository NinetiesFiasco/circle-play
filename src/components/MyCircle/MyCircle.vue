<template>
  <div id="container" ref="container">

  </div>
</template>

<script>
import gameScript from './gameScript'

export default {
  name: 'MyCircle',
  mounted() {
    gameScript(this.$refs.container)
  }
}
</script>


<style scoped>
#container {
  background: blue;
  width: 100vw;
  height: 100vh;
}
</style>
