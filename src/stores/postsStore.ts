import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Post, PostExpanded } from '@/types'

export const usePostsStore = defineStore('posts', () => {
    const posts = ref<Post[]>([])
    const postExpanded = ref<PostExpanded | null>(null)

    function removePost(postId: number) {
        const postIndex = posts.value.findIndex((post) => post.id === postId)
        if (postIndex === -1) {
            return
        }
        posts.value.splice(postIndex, 1)
    }

    return { posts, postExpanded, removePost }
})
