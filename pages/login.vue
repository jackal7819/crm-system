<script setup lang="ts">
	useSeoMeta({
		title: 'Login | CRM System',
	});

	const nameRef = ref('');
	const emailRef = ref('');
	const passwordRef = ref('');

	const isLoadingStore = useIsLoadingStore();
	const router = useRouter();
</script>

<template>
	<div class="flex items-center justify-center min-h-screen bg-slate-800">
		<div class="p-10 rounded-lg bg-slate-900 text-slate-400">
			<h1 class="mb-10 text-3xl font-bold text-center">Login</h1>
			<form class="flex flex-col gap-5">
				<UiInput
					v-model="nameRef"
					placeholder="Name"
					label="name"
					type="name"
					class="text-lg"
				/>
				<UiInput
					v-model="emailRef"
					placeholder="Email"
					label="Email"
					type="email"
					class="text-lg"
				/>
				<UiInput
					v-model="passwordRef"
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
			</form>
		</div>
	</div>
</template>
