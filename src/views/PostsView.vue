<script setup lang="ts">
import { usePostsStore } from '@/stores/postsStore'
import HeaderBar from '@/components/HeaderBar.vue'
import PostPreview from '@/components/PostPreview.vue'

const postsStore = usePostsStore()
</script>

<template>
    <div class="page-wrapper">
        <header-bar />
        <ul class="posts-list">
            <li v-for="post in postsStore.posts" class="posts-list__item">
                <post-preview :post="post" />
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use '@/styles/postsView';
</style>
