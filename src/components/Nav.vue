<script setup>
import { RouterLink, useRouter } from 'vue-router'
import Container from './Container.vue'
import AuthModal from './AuthModal.vue'
import { ref } from 'vue'
import { useUserStore } from '../stores/users'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()

const { user, loadingUser } = storeToRefs(userStore)
const router = useRouter()
const searchUsername = ref('')

const onSearch = () => {
	if (searchUsername.value) {
		router.push(`/profile/${searchUsername.value}`)
		searchUsername.value = ''
	}
}

const handleLogout = async () => {
	await userStore.handleLogout()
}

</script>

<template>
	<div>
		<a-layout-header>
			<Container>
				<div class="nav-container">
					<div class="left-content">
						<RouterLink to="/">Instagram</RouterLink>
						<a-input-search
							v-model:value="searchUsername"
							placeholder="Username..."
							style="width: 200px"
							@search="onSearch" />
					</div>
					<div class="content" v-if="!loadingUser">
						<div class="right-content" v-if="!user">
							<AuthModal :isLogin="false" />
							<AuthModal :isLogin="true" />
						</div>
						<div class="right-content" v-else>
							<a-button type="primary">Profile</a-button>
							<a-button type="primary" @click="handleLogout">Logout</a-button>
						</div>
					</div>
				</div>
			</Container>
		</a-layout-header>
	</div>
</template>

<style scoped>
.nav-container {
	display: flex;
	justify-content: space-between;
}

.content {
	display: flex;
	align-items: center;
}

.left-content {
	display: flex;
	align-items: center;
}

.left-content a {
	margin-right: 10px;
}

.right-content {
	display: flex;
	align-items: center;
}

.right-content button {
	margin-left: 10px;
}
</style>
