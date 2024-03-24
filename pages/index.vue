<script setup lang="ts">
	import type { ICard, IColumn } from '@/components/kanban/kanban.types';

	useSeoMeta({
		title: 'Home | CRM System',
	});

	const dragCardRef = ref<ICard | null>(null);
	const sourceColumnRef = ref<IColumn | null>(null);
</script>

<template>
	<div class="h-screen p-10 bg-slate-800 text-slate-400">
		<h1 class="mb-10 text-2xl font-bold">CRM System by ViKTor</h1>
		<UiCard draggable="true">
			<UiCardHeader role="button"> name card </UiCardHeader>
			<UiCardContent> Company </UiCardContent>
			<UiCardFooter> Date </UiCardFooter>
		</UiCard>
	</div>
</template>
