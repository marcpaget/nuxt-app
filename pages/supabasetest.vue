<script setup lang="ts">
//const client = useSupabaseClient()
//const { data: restaurant } = await useAsyncData('restaurant', async () => {const { data } = await client.from('restaurants').select('name, location').eq('name, Marcsjoint').single()
//return data
//})
const {supabase} = useSupabase();
const restaurantsResponse = ref();
restaurantsResponse.value = await supabase.from("restaurants").select();
</script>

<template>
    <div v-for="restaurants in restaurantsResponse.data" :key="restaurants.id">
        <h3>
            {{ restaurants.name }}
        </h3>
          <h3>
            {{ restaurants.location }}
        </h3>
    </div>
</template>