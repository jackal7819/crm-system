<script setup lang="ts">
	import type { ICard, IColumn } from '@/components/kanban/kanban.types';
	import { useKanbanQuery } from '@/components/kanban/useKanbanQuery';
	import dayjs from 'dayjs';
	import type { EnumStatus } from '@/types/deals.types';
	import { useMutation } from '@tanstack/vue-query';

	useSeoMeta({
		title: 'Home | CRM System',
	});

	const dragCardRef = ref<ICard | null>(null);
	const sourceColumnRef = ref<IColumn | null>(null);

	const config = useRuntimeConfig();

	const { data, isPending, refetch } = useKanbanQuery();

	type TypeMutationVariables = {
		docId: string;
		status?: EnumStatus;
	};

	const { mutate } = useMutation({
		mutationKey: ['move-card'],
		mutationFn: ({ docId, status }: TypeMutationVariables) => {
			return useAppwriteClient().database.updateDocument(
				config.public.dBId,
				config.public.collectionsDeals,
				docId,
				{
					status,
				}
			);
		},
		onSuccess: () => {
			refetch();
		},
	});

	const handleDragStart = (card: ICard, column: IColumn) => {
		dragCardRef.value = card;
		sourceColumnRef.value = column;
	};

	const handleDragOver = (event: DragEvent) => {
		event.preventDefault();
	};

	const handleDrop = (targetColumn: IColumn) => {
		if (dragCardRef.value && sourceColumnRef.value) {
			mutate({ docId: dragCardRef.value.id, status: targetColumn.id });
		}
	};
</script>

<template>
	<div class="h-screen p-10 bg-slate-800 text-slate-400">
		<h1 class="mb-10 text-2xl font-bold">CRM System by ViKTor</h1>
		<button
			v-if="isPending"
			type="button"
			class="relative px-4 py-2 text-yellow-400 bg-transparent border rounded-lg border-slate-600"
			disabled
		>
			<span class="absolute flex w-3 h-3 -right-1 -top-1">
				<span
					class="absolute inline-flex w-full h-full bg-yellow-400 rounded-full opacity-75 animate-ping"
				></span>
				<span
					class="relative inline-flex w-3 h-3 bg-yellow-500 rounded-full"
				></span>
			</span>
			Transactions
		</button>
		<div v-else>
			<div class="grid grid-cols-5 gap-6 2xl:gap-16">
				<div
					v-for="column in data"
					:key="column.id"
					@dragover="handleDragOver"
					@drop="handleDrop(column)"
				>
					<div
						class="px-5 py-1 mb-3 text-center rounded bg-slate-400 text-slate-900"
					>
						{{ column.title }}
					</div>
					<KanbanCreateDeal :refetch="refetch" :status="column.id" />
					<UiCard
						v-for="card in column.cards"
						:key="card.name"
						draggable="true"
						@dragstart="handleDragStart(card, column)"
						class="mb-3"
					>
						<UiCardHeader role="button">
							<UiCardTitle>{{ card.name }}</UiCardTitle>
							<UiCardDescription>{{
								convertCurrency(card.price)
							}}</UiCardDescription>
						</UiCardHeader>
						<UiCardContent
							>Company: {{ card.companyName }}</UiCardContent
						>
						<UiCardFooter>{{
							dayjs(card.$createdAt).format('DD MMMM YYYY')
						}}</UiCardFooter>
					</UiCard>
				</div>
			</div>
		</div>
	</div>
</template>
