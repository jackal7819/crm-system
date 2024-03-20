<script setup lang="ts">
	import Sidebar from '@/components/layout/Sidebar.vue';
</script>

<template>
	<section class="grid h-screen grid-cols-[1fr_6fr]">
		<Sidebar />
		<slot />
	</section>
</template>
