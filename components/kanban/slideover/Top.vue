<script setup lang="ts">
	import dayjs from 'dayjs';

	const store = useSlideStore();
</script>

<template>
	<div class="p-3 border rounded bg-black/20 border-slate-600">
		<div class="mb-4 text-xl uppercase bold">About deal</div>
		<KanbanSlideoverLabel labelText="Name">{{
			store.getSlide()?.value?.card?.name
		}}</KanbanSlideoverLabel>
		<KanbanSlideoverLabel labelText="Amount">{{
			convertCurrency(store.getSlide()?.value?.card?.price || 0)
		}}</KanbanSlideoverLabel>
	</div>
	<KanbanSlideoverLabel labelText="Status">
		<UIBadge variant="outline">
			{{ store.getSlide()?.value?.card?.status }}
		</UIBadge>
	</KanbanSlideoverLabel>
	<KanbanSlideoverLabel labelText="Client">{{
		store.getSlide()?.value?.card?.companyName
	}}</KanbanSlideoverLabel>
	<KanbanSlideoverLabel labelText="Date">{{
		dayjs(store.getSlide()?.value?.card?.$createdAt).format('DD MMMM YYYY')
	}}</KanbanSlideoverLabel>
</template>
