<script lang="ts" setup></script>

<template>
	<aside class="relative flex flex-col justify-between w-full h-full px-5 py-8 pb-20 bg-slate-900">
		<NuxtLink to="/" class="block mb-10"
			><NuxtImg src="/vuejs.svg" alt="Logo" width="120px" class="mx-auto"
		/></NuxtLink>
		<button
			class="absolute duration-300 top-3 right-3 text-slate-400 hover:text-yellow-500"
		>
			<Icon name="line-md:logout" size="24" />
		</button>
		<LayoutMenu />
	</aside>
</template>
