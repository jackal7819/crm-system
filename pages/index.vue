<script setup lang="ts">
	import type { ICard, IColumn } from '@/components/kanban/kanban.types';
	import { useKanbanQuery } from '@/components/kanban/useKanbanQuery';

	useSeoMeta({
		title: 'Home | CRM System',
	});

	const dragCardRef = ref<ICard | null>(null);
	const sourceColumnRef = ref<IColumn | null>(null);

	const { data, isLoading, refetch } = useKanbanQuery();
</script>

<template>
	<div class="h-screen p-10 bg-slate-800 text-slate-400">
		<h1 class="mb-10 text-2xl font-bold">CRM System by ViKTor</h1>
		<button
			v-if="isLoading"
			type="button"
			class="relative px-4 py-2 text-blue-400 bg-transparent border rounded-lg border-slate-600"
			disabled
		>
			<span class="absolute flex w-3 h-3 -right-1 -top-1">
				<span
					class="absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping"
				></span>
				<span
					class="relative inline-flex w-3 h-3 bg-blue-500 rounded-full"
				></span>
			</span>
			Transactions
		</button>
		<div v-else>
			<div class="grid grid-cols-5 gap-6 2xl:gap-16">
				<div v-for="(column, index) in data" :key="column.id">
					<div
						class="px-5 py-1 mb-2 text-center rounded bg-slate-400 text-slate-900"
					>
						{{ column.title }}
					</div>
					<UiCard draggable="true">
						<UiCardHeader role="button"> name card </UiCardHeader>
						<UiCardContent> Company </UiCardContent>
						<UiCardFooter> Date </UiCardFooter>
					</UiCard>
				</div>
			</div>
		</div>
	</div>
</template>
