<script setup lang="ts">
	useSeoMeta({
		title: 'Login | CRM System',
	});
</script>

<template>
	<div class="flex items-center justify-center min-h-screen bg-slate-800">
		<div class="p-10 rounded-lg bg-slate-900 text-slate-400">
			<h1 class="mb-10 text-3xl font-bold text-center">Login</h1>
			<form>
				<UiInput
					placeholder="Email"
					label="Email"
					type="email"
					class="mb-3"
				/>
			</form>
		</div>
	</div>
</template>
