<script setup lang="ts">
const {supabase} = useSupabase();
const storage = ref();
storage.value = await supabase.storage.getBucket("nextjs-gallery-images");
</script>

<template>
    <div>
        <h1>
            Hej
        </h1>
        <h3>
            {{ storage.id }}
        </h3>  
    </div>
</template>