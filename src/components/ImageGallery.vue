<script setup>
import {defineProps} from 'vue'

const props = defineProps(['posts'])
</script>

<template>
    <div class="image-gallery-container">
        <img class="image" v-for="post in props.posts" :key="post.id" :src="post.image">
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