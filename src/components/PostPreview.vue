<script setup lang="ts">
import { usePostsStore } from '@/stores/postsStore'
import type { Post } from '@/types'

const props = defineProps<{
    post: Post
}>()

const postsStore = usePostsStore()

function postRightClick(event: Event) {
    event.preventDefault()
    postsStore.removePost(props.post.id)
}
</script>

<template>
    <h2 class="title">
        <router-link
            :to="{ name: 'postPage', params: { id: props.post.id } }"
            @contextmenu="postRightClick($event)"
            class="link post-link"
        >
            {{ props.post.title }}
        </router-link>
    </h2>
</template>

<style scoped lang="scss">
@use '@/styles/postPreview';
</style>
