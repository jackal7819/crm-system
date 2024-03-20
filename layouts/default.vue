<script setup lang="ts">
	const isLoadingStore = useIsLoadingStore();
	const authStore = useAuthStore();
	const router = useRouter();

	onMounted(async () => {
		isLoadingStore.isLoading = true;
		try {
			const user = await account.get();
			if (user) {
				authStore.setUser(user);
			}
		} catch (error: unknown) {
			router.push('/login');
		} finally {
			isLoadingStore.isLoading = false;
		}
	});
</script>

<template>
	<section class="grid h-screen grid-cols-[1fr_6fr]">
		<LayoutSidebar v-if='authStore.getUser()' />
		<slot />
	</section>
</template>
