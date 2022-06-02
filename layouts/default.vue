<template>
<div>
  <div class="content">
     <!-- <Menu /> -->
      <AppMenu />
     <!-- <NavBarVue /> -->
      <slot />
  </div>
  <AppFooter />
</div>
</template>

<script>
import AppMenu from '~~/components/AppMenu.vue'
import AppFooter from '~~/components/AppFooter.vue'
import Menu from '~~/components/MenuButtons.vue'
import NavBarVue from '~~/components/NavBarFlowbite.vue'
export default {
  components: { AppMenu, AppFooter, Menu, NavBarVue },

}
</script>

<style>

</style>