<script setup lang="ts">
	useSeoMeta({
		title: 'Home | CRM System',
	})
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
