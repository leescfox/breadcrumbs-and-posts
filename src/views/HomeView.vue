<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="page-wrapper">
        <h1 class="title">Сайт для просмотра различных постов</h1>
        <h2 class="subtitle">Навигация</h2>
        <nav class="nav">
            <ul class="nav__list">
                <li>
                    <router-link :to="{ name: 'posts' }" class="link">
                        Страница списка постов
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped lang="scss">
@use '@/styles/homeView';
</style>
