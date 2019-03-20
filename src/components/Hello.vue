<template>
  <p>{{ greeting }} World! -- Louis</p>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      greeting: 'Hello'
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
