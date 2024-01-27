import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Route } from '@/types'

export const useRoutesStore = defineStore('routes', () => {
    const routes = ref<Route[]>([])

    const routesArrayLength = computed(() => routes.value.length)

    return { routes, routesArrayLength }
})
