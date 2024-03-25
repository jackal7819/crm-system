import type { IDeal } from '@/types/deals.types';
import { useQuery } from '@tanstack/vue-query';

import type { IColumn } from './kanban.types';
import { KANBAN_DATA } from './kanban.data';

export const useKanbanQuery = () => {
	const config = useRuntimeConfig();
	return useQuery({
		queryKey: ['deals'],
		queryFn: () =>
			useAppwriteClient().database.listDocuments(
				config.public.dBId,
				config.public.collectionsDeals
			),
		select(data) {
			const newBoard: IColumn[] = KANBAN_DATA.map((column) => ({
				...column,
				cards: [],
			}));
			const deals = data.documents as unknown as IDeal[];

			for (const deal of deals) {
				const board = newBoard.find(
					(board) => board.id === deal.status
				);
				if (board) {
					board.cards.push({
						id: deal.$id,
						name: deal.name,
						price: deal.price,
						$createdAt: deal.$createdAt,
						companyName: deal.customer.name,
						status: board.title,
					});
				}
			}
			return newBoard;
		},
	});
};
