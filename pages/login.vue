<script setup lang="ts">
	import type { AppwriteException } from 'appwrite';

	useSeoMeta({
		title: 'Login | CRM System',
	});

	const name = ref('');
	const email = ref('');
	const password = ref('');
	const error = ref('');

	const isLoadingStore = useIsLoadingStore();
	const authStore = useAuthStore();
	const router = useRouter();

	const handleLogin = async () => {
		isLoadingStore.isLoading = true;
		try {
			await account.createEmailPasswordSession(
				email.value,
				password.value
			);
			const user = await account.get();
			authStore.setUser({
				name: user.name,
				email: user.email,
				status: user.status,
			});

			name.value = '';
			email.value = '';
			password.value = '';

			await router.push('/');
			isLoadingStore.isLoading = false;
		} catch (err: unknown) {
			if (err instanceof Error) {
				error.value = err.message;
			}
			isLoadingStore.isLoading = false;
		}
	};
</script>

<template>
	<div class="flex items-center justify-center min-h-screen bg-slate-800">
		<div class="p-10 rounded-lg bg-slate-900 text-slate-400">
			<h1 class="mb-10 text-3xl font-bold text-center">Login</h1>
			<form class="flex flex-col gap-5">
				<UiInput
					v-model="name"
					placeholder="Name"
					label="name"
					type="name"
					class="text-lg"
				/>
				<UiInput
					v-model="email"
					placeholder="Email"
					label="Email"
					type="email"
					class="text-lg"
				/>
				<UiInput
					v-model="password"
					placeholder="Password"
					label="Password"
					type="password"
					class="text-lg"
				/>
				<div class="flex justify-center gap-5">
					<UiButton
						type="button"
						class="text-lg w-28 hover:text-yellow-500"
						>Login</UiButton
					>
					<UiButton
						type="button"
						class="text-lg w-28 hover:text-yellow-500"
						>Register</UiButton
					>
				</div>
				<div v-if="error" class="text-red-500">
					{{ error }}
				</div>
			</form>
		</div>
	</div>
</template>
