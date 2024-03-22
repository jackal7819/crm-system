<script setup lang="ts">
	import { nanoid } from 'nanoid';

	useSeoMeta({
		title: 'Login | CRM System',
	});

	const nameRef = ref('');
	const emailRef = ref('');
	const passwordRef = ref('');
	const errorRef = ref('');

	const isLoadingStore = useIsLoadingStore();
	const authStore = useAuthStore();
	const router = useRouter();

	const handleLogin = async () => {
		isLoadingStore.isLoading = true;
		try {
			await account.createEmailPasswordSession(
				emailRef.value,
				passwordRef.value
			);
			const user = await account.get();
			authStore.setUser({
				name: user.name,
				email: user.email,
				status: user.status,
			});

			nameRef.value = '';
			emailRef.value = '';
			passwordRef.value = '';

			await router.push('/');
			isLoadingStore.isLoading = false;
		} catch (err: unknown) {
			if (err instanceof Error) {
				errorRef.value = err.message;
			}
			isLoadingStore.isLoading = false;
		}
	};

	const handleRegister = async () => {
		await account.create(
			nanoid(),
			emailRef.value,
			passwordRef.value,
			nameRef.value
		);
		await handleLogin();
	};
</script>

<template>
	<div class="flex items-center justify-center min-h-screen bg-slate-800">
		<div class="p-10 rounded-lg bg-slate-900 text-slate-400">
			<h1 class="mb-10 text-3xl font-bold text-center">Login</h1>
			<form class="flex flex-col gap-5">
				<UiInput
					v-model="nameRef"
					placeholder="Name"
					type="name"
					class="text-lg"
				/>
				<UiInput
					v-model="emailRef"
					placeholder="Email"
					type="email"
					class="text-lg"
				/>
				<UiInput
					v-model="passwordRef"
					placeholder="Password"
					type="password"
					class="text-lg"
				/>
				<div class="flex justify-center gap-5">
					<UiButton
						@click="handleLogin"
						type="button"
						class="text-lg w-28 hover:text-yellow-500"
						>Login</UiButton
					>
					<UiButton
						@click="handleRegister"
						type="button"
						class="text-lg w-28 hover:text-yellow-500"
						>Register</UiButton
					>
				</div>
				<div v-if="errorRef" class="text-red-500">
					{{ errorRef }}
				</div>
			</form>
		</div>
	</div>
</template>
