<template>
<div>
  <div class="content">
      <AppMenuDaisy />
      <slot />
  </div>
  <AppFooter />
</div>
</template>

<script>
import AppFooter from '~~/components/AppFooter.vue'
import AppMenuDaisy from '~~/components/AppMenuDaisy.vue'
export default {
  components: { AppFooter, AppMenuDaisy },
}
</script>

<style>

</style>