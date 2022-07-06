<script setup>
const {supabase} = useSupabase();
const storage = ref();
const imagestorage = ref();
// storage.value = await supabase.storage.getBucket("nextjs-gallery-images");

// imagestorage.value = await supabase.storage.from('nextjs-gallery-images').list('restaurantimages'); // path to the image in the bucket

const { data: publicURL } = await useAsyncData('publicUrl', async () => {const { data } = await supabase.storage.from('nextjs-gallery-images')
  .getPublicUrl('restaurantimages/IMG_8467.JPG');
  return data
});
/*
const { publicURL, error } = await supabase
  .storage
  .from('nextjs-gallery-images')
  .getPublicUrl('restaurantimages/IMG_8467.JPG');
*/

</script>

<template>
    <div>
        <h1>
            Hej
        </h1>
        <h3>
            {{ publicURL }}
        </h3>  
    </div>
</template>