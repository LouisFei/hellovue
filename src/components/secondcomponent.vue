<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
    <a>written by {{ author }}</a>
    <p>感谢
      <a href="https://github.com/showonne" target="_blank">showonne</a>大神的技术指导
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author: '准健身教练 -feiboy',
      articles: []
    }
  }
}
</script>

<style>
</style>
