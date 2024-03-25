import type { IDeal } from '@/types/deals.types';
import { useQuery } from '@tanstack/vue-query';

import { KANBAN_DATA } from './kanban.data';

export const useKanbanQuery = () => {
	const config = useRuntimeConfig();
	return useQuery({
		queryKey: ['deals'],
		queryFn: () => useAppwriteClient().database.listDocuments(config.public.dBId, config.public.collectionsDeals),
		select(data) {
			const newBoard = [...KANBAN_DATA];
			const deals = data.documents as unknown as IDeal[];
		},
	});
};
