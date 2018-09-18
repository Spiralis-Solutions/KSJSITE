<template>
  <div id="q-app">
    <navbar></navbar>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    'navbar': navbar
  }
}
</script>

<style scoped lang="less">
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
