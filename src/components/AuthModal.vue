<script setup>
import { ref, defineProps, reactive } from 'vue'
import { useUserStore } from '../stores/users.js'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()

const { errorMessage, loading, user } = storeToRefs(userStore)

const props = defineProps(['isLogin'])
const visible = ref(false)

const userCredentials = reactive({
	email: '',
	password: '',
	username: '',
})

const showModal = () => {
	visible.value = true
}

const clearUserCredentialsInput = () => {
	userCredentials.email = ''
	userCredentials.password = ''
	userCredentials.username = ''
	userStore.clearErrorMessage()
}

const handleOk = async (e) => {
	if(props.isLogin) {
		await userStore.handleLogin({
			password: userCredentials.password,
			email: userCredentials.email
		})
	} else {
		await userStore.handleSignup(userCredentials)
	}
	
	if (user.value) {
		clearUserCredentialsInput()
		visible.value = false
	}
}

const handleCancel = () => {
	clearUserCredentialsInput()
	visible.value = false
}

const title = props.isLogin ? 'Login' : 'Signup'
</script>

<template>
	<div>
		<a-button type="primary" @click="showModal" class="btn">{{ title }}</a-button>
		<a-modal v-model:visible="visible" :title="title" @ok="handleOk">
			<template #footer>
				<a-button key="back" @click="handleCancel">Cancel</a-button>
				<a-button :disabled="loading" key="submit" type="primary" :loading="loading" @click="handleOk">Submit</a-button>
			</template>
			<div v-if="!loading" class="input-container">
				<a-input class="input" v-if="!isLogin" v-model:value="userCredentials.username" placeholder="Username" />
				<a-input class="input" v-model:value="userCredentials.email" placeholder="Email" @keyup.enter="handleOk"/>
				<a-input class="input" v-model:value="userCredentials.password" placeholder="Password" type="password" @keyup.enter="handleOk"/>
			</div>
			<div v-else class="spinner">
				<a-spin />
			</div>
			<a-typography-text v-if="errorMessage" type="danger">{{ errorMessage }}</a-typography-text>
		</a-modal>
	</div>
</template>

<style scoped>
.btn {
	margin-left: 10px;
}

.input {
	margin-top: 5px;
}

.input-container {
	height: 120px;
}

.spinner {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 120px;
}
</style>
