<script setup lang="ts">
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
}
const { coords, locatedAt, error, resume, pause } = useGeolocation(options)
let speedkmh = computed(() => {
    if (coords.value.speed) {
        return (coords.value.speed * 3.6).toFixed(2)
    }
    return 0
})
let altitude = computed(() => {
    if (coords.value.altitude) {
        return coords.value.altitude.toFixed(2)
    }
    return 0
})
let accurateAltitude = computed(() => {
    if (coords.value.altitude) {
        return coords.value.altitude.toFixed(2)
    }
    return 0
})
let accuracy = computed(() => {
    if (coords.value.accuracy) {
        return coords.value.accuracy.toFixed(2)
    }
    return 0
})
let heading = computed(() => {
    if (coords.value.heading) {
        return coords.value.heading.toFixed(2)
    }
    return 0
})
</script>

<template>
    <!-- <pre lang="json">{{
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
        }}</pre> -->
    <p>Speed: {{ speedkmh }} km/h</p>
    <div class="stats stats-vertical bg-primary text-primary-content">
        <div class="stat">
            <div class="stat-title">Speed</div>
            <div class="stat-value">{{ speedkmh }}</div>
            <div class="stat-desc">KM/T</div>
            <div class="stat">
                <div class="stat-title">Approx. altitude</div>
                <div class="stat-value">{{ altitude }}</div>
                <div class="stat-desc">M.O.H.</div>

                <div class="stat">
                    <div class="stat-title">Accurate altitude</div>
                    <div class="stat-value">{{ accurateAltitude }}</div>
                    <div class="stat-desc">m.o.h.</div>
                </div>
                <div class="stat">
                    <div class="stat-title">Heading</div>
                    <div class="stat-value">{{ heading }}</div>
                    <div class="stat-desc" />
                </div>
                <div class="stat">
                    <div class="stat-title">Accuracy</div>
                    <div class="stat-value">{{ accuracy }}</div>
                    <div class="stat-desc" />
                </div>
                <div class="stat-actions">
                    <button class="btn btn-sm btn-success" @click="resume">Start watch</button>
                </div>
                <div class="stat-actions">
                    <button class="btn btn-sm" @click="pause">Pause watch</button>
                </div>
            </div>
        </div>
    </div>
</template>
