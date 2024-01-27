import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import { useRoutesStore } from '@/stores/routesStore'
import { usePostsStore } from '@/stores/postsStore'
import type { Post, User } from '@/types'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {
                hierarchy: () => [
                    {
                        title: 'Главная',
                        link: { name: 'home' }
                    }
                ]
            },
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/posts',
            name: 'posts',
            meta: {
                hierarchy: () => [
                    {
                        title: 'Главная',
                        link: { name: 'home' }
                    },
                    {
                        title: 'Список постов',
                        link: { name: 'posts' }
                    }
                ]
            },
            component: () => import('@/views/PostsView.vue'),
            beforeEnter: async () => {
                const postsStore = usePostsStore()
                try {
                    const request = await axios.get('posts')
                    postsStore.posts = <Post[]>request.data
                } catch (e) {
                    postsStore.posts = []
                    console.log(e)
                }
            }
        },
        {
            path: '/posts/:id',
            name: 'postPage',
            meta: {
                hierarchy: (route) => {
                    const postId = route.params.id
                    return [
                        {
                            title: 'Главная',
                            link: { name: 'home' }
                        },
                        {
                            title: 'Список постов',
                            link: { name: 'posts' }
                        },
                        {
                            title: `Пост №${postId}`,
                            link: { name: 'postPage', params: { id: postId } }
                        }
                    ]
                }
            },
            component: () => import('@/views/PostPageView.vue'),
            beforeEnter: async (to) => {
                const postsStore = usePostsStore()
                try {
                    const postRequest = await axios.get(`posts/${to.params.id}`)
                    const postData = <Post>postRequest.data
                    const userRequest = await axios.get(`users/${postData.userId}`)
                    const userData = <User>userRequest.data
                    postsStore.postExpanded = { postData: postData, userData: userData }
                } catch (e) {
                    postsStore.postExpanded = null
                    console.log(e)
                }
            }
        }
    ]
})

router.beforeEach((to) => {
    const routesStore = useRoutesStore()
    routesStore.routes = to.meta.hierarchy(to)
})

export default router
