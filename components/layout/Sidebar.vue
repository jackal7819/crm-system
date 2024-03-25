<script setup lang="ts">
	const isLoadingStore = useIsLoadingStore();
	const authStore = useAuthStore();
	const router = useRouter();

	const handleLogout = async () => {
		isLoadingStore.isLoading = true;
		await useAppwriteClient().account.deleteSession('current');
		authStore.removeUser();
		router.push('/login');
		isLoadingStore.isLoading = false;
	};
</script>

<template>
	<aside
		class="relative flex flex-col justify-between w-full h-full px-5 py-8 pb-16 bg-slate-900"
	>
		<NuxtLink to="/" class="block mt-5 mb-10"
			><NuxtImg src="/vuejs.svg" alt="Logo" width="120px" class="mx-auto"
		/></NuxtLink>
		<button
			@click="handleLogout"
			class="absolute duration-300 top-3 right-3 text-slate-400 hover:text-yellow-500"
		>
			<Icon name="line-md:logout" size="24" />
		</button>
		<LayoutMenu />
	</aside>
</template>
