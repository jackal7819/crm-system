<script lang="ts" setup>
	import { menuItems } from './menu.data';
</script>

<template>
		<NuxtLink
			class="flex w-full px-3 py-1 mb-2 duration-300 rounded-lg align-items-center hover:bg-gray-700 hover:shadow text-slate-400 hover:text-amber-700"
			v-for="link in menuItems"
			:key="link.name"
			:to="link.url"
		>
			<Icon :name="link.icon" size="24" class="" />
			<span class="ml-3 text-xl">{{ link.name }}</span>
		</NuxtLink>
</template>
