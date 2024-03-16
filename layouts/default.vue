<script lang="ts" setup>
import Sidebar from '~/components/layout/Sidebar.vue'
</script>

<template>
	<section class="grid" style="min-height: 100vh">
		<Sidebar />
		<slot />
	</section>
</template>

<style scoped>
	.grid {
		display: grid;
		grid-template-columns: 1fr 6fr;
	}
</style>
