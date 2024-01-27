<script setup lang="ts">
import { useRoutesStore } from '@/stores/routesStore'

const routesStore = useRoutesStore()
</script>

<template>
    <nav>
        <span v-for="(route, i) in routesStore.routes">
            <template v-if="i + 1 < routesStore.routesArrayLength">
                <router-link :to="route.link" class="link">{{ route.title }}</router-link>
                <span>{{ ' / ' }}</span>
            </template>
            <template v-else>
                <span>{{ route.title }}</span>
            </template>
        </span>
    </nav>
</template>

<style scoped lang="scss">
@use '@/styles/links';
</style>
