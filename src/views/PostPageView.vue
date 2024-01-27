<script setup lang="ts">
import { usePostsStore } from '@/stores/postsStore'
import HeaderBar from '@/components/HeaderBar.vue'

const postsStore = usePostsStore()
</script>

<template>
    <div class="page-wrapper">
        <header-bar />
        <article class="post">
            <template v-if="postsStore.postExpanded">
                <section class="post-content">
                    <h1 class="post-content__title">
                        {{ postsStore.postExpanded.postData.title }}
                    </h1>
                    <p class="post-content__body">{{ postsStore.postExpanded.postData.body }}</p>
                </section>
                <section class="post-author">
                    <h2 class="post-author__title">Об авторе:</h2>
                    <address class="post-author__data">
                        <ul class="post-author__data-list">
                            <li>{{ postsStore.postExpanded.userData.username }}</li>
                            <li>
                                <a
                                    :href="`mailto:${postsStore.postExpanded.userData.email}`"
                                    class="link-mail"
                                >
                                    {{ postsStore.postExpanded.userData.email }}
                                </a>
                            </li>
                            <li>
                                <a
                                    :href="`tel:${postsStore.postExpanded.userData.phone}`"
                                    class="link-tel"
                                >
                                    {{ postsStore.postExpanded.userData.phone }}
                                </a>
                            </li>
                            <li>
                                <a
                                    :href="`//${postsStore.postExpanded.userData.website}`"
                                    target="_blank"
                                    class="link"
                                >
                                    {{ postsStore.postExpanded.userData.website }}
                                </a>
                            </li>
                        </ul>
                    </address>
                </section>
            </template>
            <template v-else>
                <p class="post-error">Произошла ошибка при получении данных!</p>
            </template>
        </article>
    </div>
</template>

<style scoped lang="scss">
@use '@/styles/postPageView';
</style>
