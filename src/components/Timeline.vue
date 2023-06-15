<script setup>
import Card from './Card.vue'
import Container from './Container.vue'

const data = [
	{
		id: 1,
		username: 'selena',
		url: 'https://s3.wizaz.pl/newsy/selena-gomez-4294962913-4_3.jpg',
        caption: 'have a nice day :)'
	},
    {
        id: 2,
        username: 'the weekend',
        url: 'https://www.elle.pl/media/cache/big/uploads/media/default/0004/76/the-weeknd-spiewa-o-selenie-gomez.jpeg',
        caption: 'hello guys'
    }
]

</script>

<template>
	<Container>
		<div class="timeline-container">
			<Card v-for="post in data" :key="post.id" :post="post"/>
		</div>
	</Container>
</template>

<style scoped>
.timeline-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 0;
}
</style>
