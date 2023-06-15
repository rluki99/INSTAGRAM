<script setup>
import Container from './Container.vue'
import ImageGallery from './ImageGallery.vue';
import UserBar from './UserBar.vue'

</script>

<template>
	<Container>
		<div class="profile-container">
			<UserBar 
            username="laithharb"
            :userInfo="{
                posts: 4,
                followers: 100,
                following: 342
            }"

            />
            <ImageGallery :posts="[
                {
                id: 1,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RrOQeiScT3YEm2Q7wVvFma0f0X_pRLHsNbnms64&s'
                },
                {
                id: 2,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RrOQeiScT3YEm2Q7wVvFma0f0X_pRLHsNbnms64&s'
                },
            ]"/>
		</div>
	</Container>
</template>

<style scoped>
.profile-container {
	display: flex;
	flex-direction: column;
	align-items: left;
	padding: 20px 0;
}
</style>
