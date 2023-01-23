<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import './stores/root.js'

export default {
  name: 'App',
}
</script>