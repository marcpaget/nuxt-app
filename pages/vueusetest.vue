<script setup lang="ts">
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
}
const { coords, locatedAt, error, resume, pause } = useGeolocation(options)
</script>

<template>
    <div>
        <pre lang="json">{{
            JSON.stringify(
                {
                    coords: {
                        accuracy: coords.accuracy,
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                        altitude: coords.altitude,
                        altitudeAccuracy: coords.altitudeAccuracy,
                        heading: coords.heading,
                        speed: coords.speed,
                    },
                    locatedAt,
                    error: error ? error.message : error,
                },
                null,
                2
            )
        }}</pre>
        <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="pause">Pause watch</button>
        <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" @click="resume">Start watch</button>
    </div>
</template>
