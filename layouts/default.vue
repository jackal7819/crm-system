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
	<LayoutLoader v-if="isLoadingStore.isLoading" />
	<section v-else :class="{'grid h-screen grid-cols-[1fr_6fr]': authStore.getUser().status}">
		<LayoutSidebar v-if='authStore.getUser().status' />
		<slot />
	</section>
</template>
