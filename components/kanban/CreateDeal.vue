<script setup lang="ts">
	import type { IDeal } from '@/types/deals.types';
	import { useMutation } from '@tanstack/vue-query';
	import { nanoid } from 'nanoid';

	const props = defineProps({
		status: {
			type: String,
			default: '',
		},
		refetch: {
			type: Function,
		},
	});

	interface IDealFormState extends Pick<IDeal, 'name' | 'price'> {
		customer: {
			name: string;
			email: string;
		};
		status: string;
	}

	const isOpenForm = ref(false);
	const config = useRuntimeConfig();

	const { handleSubmit, defineField, handleReset } = useForm<IDealFormState>({
		initialValues: {
			status: props.status,
		},
	});

	const [name, nameAttrs] = defineField('name');
	const [price, priceAttrs] = defineField('price');
	const [customerName, customerNameAttrs] = defineField('customer.name');
	const [customerEmail, customerEmailAttrs] = defineField('customer.email');

	const { mutate, isPending } = useMutation({
		mutationKey: ['create-deal'],
		mutationFn: (data: IDealFormState) =>
			useAppwriteClient().database.createDocument(
				config.public.dBId,
				config.public.collectionsDeals,
				nanoid(),
				data
			),
		onSuccess: () => {
			isOpenForm.value = false;
			props.refetch && props.refetch();
			handleReset();
		},
	});

	const onSubmit = handleSubmit((data) => {
		mutate(data);
	});
</script>

<template>
	<div class="mb-3 text-center">
		<button
			class="duration-300 opacity-20 hover:opacity-100 hover:text-yellow-500"
			@click="isOpenForm = !isOpenForm"
		>
			<Icon
				v-if="isOpenForm"
				name="radix-icons:arrow-up"
				size="40"
				class="fade-in-100 fade-out-0"
			/>
			<Icon
				v-if="!isOpenForm"
				name="radix-icons:plus-circled"
				size="40"
				class="fade-in-100 fade-out-0"
			/>
		</button>
	</div>
	<form v-if="isOpenForm" class="form" @submit="onSubmit">
		<UiInput
			placeholder="Name"
			v-model="name"
			v-bind="nameAttrs"
			type="text"
			class="input"
		/>
		<UiInput
			placeholder="Amount"
			v-model="price"
			v-bind="priceAttrs"
			type="text"
			class="input"
		/>
		<UiInput
			placeholder="Email"
			v-model="customerEmail"
			v-bind="customerEmailAttrs"
			type="text"
			class="input"
		/>
		<UiInput
			placeholder="Company"
			v-model="customerName"
			v-bind="customerNameAttrs"
			type="text"
			class="input"
		/>
		<button class="btn" :disabled="isPending">
			{{ isPending ? 'Saving...' : 'Save Deal' }}
		</button>
	</form>
</template>

<style scoped>
	.input {
		@apply border-slate-900 mb-3 placeholder:text-slate-600 focus:border-slate-900 duration-300 text-lg;
	}

	.btn {
		@apply border-slate-900 rounded-lg text-slate-400 hover:bg-slate-700 duration-300 hover:text-yellow-500 border py-2 px-4;
	}

	.form {
		@apply mb-3 block;
		animation: show 0.5s ease-in-out;
	}

	@keyframes show {
		from {
			@apply border-transparent;
			transform: translateY(-30px);
			opacity: 0.4;
		}
		to {
			@apply border-transparent;
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
