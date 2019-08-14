<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
  </div>
</template>

<script>
import navitem from '@/components/navitem'
export default {
  name: 'App',
  components: {
    navbar: navitem
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
