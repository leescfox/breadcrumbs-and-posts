import 'vue-router'
import type { Route } from '@/types'

export {}

declare module 'vue-router' {
    interface RouteMeta {
        hierarchy: (route: RouteLocationNormalized) => Route[]
    }
}
