<script setup lang="ts">
	import type { HTMLAttributes } from 'vue';
	import { cn } from '@/utils';

	const props = defineProps<{
		class?: HTMLAttributes['class'];
	}>();
</script>

<template>
	<div
		:class="
			cn(
				'rounded-xl border border-transparent bg-slate-900 text-slate-400 duration-300 hover:border-slate-600 text-card-foreground animation',
				props.class
			)
		"
	>
		<slot />
	</div>
</template>

<style scoped>
	@keyframes show {
		from {
			@apply border-transparent;
			transform: scale(0.5) translateY(-30px);
			opacity: 0.4;
		}

		to {
			@apply border-transparent;
			transform: scale(1) translateY(0);
			opacity: 1;
		}
	}

	.animation {
		animation: show 0.5s ease-in-out;
	}
</style>
