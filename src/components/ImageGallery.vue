<script setup>
import {defineProps} from 'vue'

const props = defineProps(['posts'])
const {VITE_BASE_PHOTO_URL} = import.meta.env
</script>

<template>
    <div class="image-gallery-container">
        <img class="image" 
        v-for="post in props.posts" 
        :key="post.id" 
        :src="`${VITE_BASE_PHOTO_URL}${post.url}`">
    </div>
</template>

<style scoped>
.image-gallery-container {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
}

.image {
    margin: 5px;
    width: 190px;
}
</style>