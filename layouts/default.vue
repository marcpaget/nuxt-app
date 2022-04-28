<template>
  <div>
      <AppMenu />
      <slot />
  </div>
</template>

<script>
import AppMenu from '~~/components/AppMenu.vue'
export default {
  components: { AppMenu },

}
</script>

<style>

</style>