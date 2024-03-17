<script lang="ts" setup></script>

<template>
	<aside class="relative w-full h-full px-5 py-8 bg-slate-900">
		<NuxtLink to="/" class="block mb-10"
			><NuxtImg src="/vuejs.svg" alt="Logo" width="100px" class="mx-auto"
		/></NuxtLink>
		<button class="absolute duration-300 top-3 right-3 text-slate-400 hover:text-amber-700">
			<Icon name="line-md:logout" size="24" />
		</button>
	</aside>
</template>
