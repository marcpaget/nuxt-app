<template>
    <div>
        <AppHeader />
    </div>
</template>

<script>
// import {AppHeader} from "~~/components/AppHeader.vue"
// export default {
//   components: {
//     AppHeader
//   },
// }

definePageMeta({
    middleware: ['auth'],
})
</script>

<style></style>
