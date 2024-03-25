<script setup lang="ts">
	import type { IDeal } from '@/types/deals.types';

	defineProps({
		status: {
			type: String,
			default: '',
		},
		refetch: {
			type: Function,
		}
	});

	interface IDealFormState extends Pick<IDeal, 'name' | 'price'> {
		customer: {
			name: string;
			email: string;
		};
		status: string;
	}

	const isOpenForm = ref(false);
</script>

<template>
	<div class="mb-3 text-center">
		<button
			class="duration-300 opacity-10 hover:opacity-100 hover:text-blue-500"
			@click="isOpenForm = !isOpenForm"
		>
			<Icon
				v-if="isOpenForm"
				name="radix-icons:arrow-up"
				size="24"
				class="fade-in-100 fade-out-0"
			/>
			<Icon
				v-if="isOpenForm"
				name="radix-icons:plus-circled"
				size="24"
				class="fade-in-100 fade-out-0"
			/>
		</button>
	</div>
	<form></form>
</template>

<style scoped>
	.input {
		@apply border-[#161C26] mb-3 placeholder:text-[#748092] focus:border-slate-900 duration-300;
	}

	.btn {
		@apply border-[#161C26] rounded text-slate-400 hover:text-slate-200 duration-300 text-xs hover:border-blue-500 border py-1 px-2;
	}

	.form {
		@apply mb-3 block;
		animation: show 0.5s ease-in-out;
	}

	@keyframes show {
		from {
			@apply border-blue-500
			transform: translateY(-35px)
			opacity: 0.4;
		}
		to {
			@apply border-transparent
			transform: translateY(0)
			opacity: 1;
		}
	}
</style>
