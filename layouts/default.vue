<template>
<div>
  <div class="content">
      <AppMenu />
      <Menu />
      <slot />
  </div>
  <AppFooter />
</div>
</template>

<script>
import AppMenu from '~~/components/AppMenu.vue'
import AppFooter from '~~/components/AppFooter.vue'
import Menu from '~~/components/MenuButtons.vue'
export default {
  components: { AppMenu, AppFooter, Menu },

}
</script>

<style>

</style>