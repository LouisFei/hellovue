<template>
  <div id='firstcomponent'>
    <h1>I am a title.</h1>
    <a> written by {{ author }}</a>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      author: '准健身教练 feiboy'
    }
  }
}
</script>

<style>
</style>
