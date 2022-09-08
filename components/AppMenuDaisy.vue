<template>
<div class="navbar bg-base-100">
  <div class="flex-1">
    <Icon name="noto:ninja-light-skin-tone" />
    <nuxt-link class="btn btn-ghost normal-case text-xl" to="/">Selfhosting.ninja</nuxt-link>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><nuxt-link>Item 1</nuxt-link></li>
      <li tabindex="0">
        <nuxt-link>
          Projects
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </nuxt-link>
        <ul class="p-2 bg-base-100">
          <li><nuxt-link to="/supabasetest">Supabasetest</nuxt-link></li>
          <li><nuxt-link to="/storagetest">Storagetest</nuxt-link></li>
          <li><nuxt-link to="/calculator">Calculator</nuxt-link></li>
          <li><nuxt-link to="/weather">Weather</nuxt-link></li>
          <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
          <li><nuxt-link to="/form">Form</nuxt-link></li>
        </ul>
      </li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>