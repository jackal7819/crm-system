import { EnumStatus } from '~/types/deals.types';

import type { IColumn } from './kanban.types';

export const KANBAN_DATA: IColumn[] = [
	{
		id: EnumStatus.todo,
		title: 'To Do',
		cards: [],
	},
	{
		id: EnumStatus['to-be-agreed'],
		title: 'To Be Agreed',
		cards: [],
	},
	{
		id: EnumStatus['in-progress'],
		title: 'In Progress',
		cards: [],
	},
	{
		id: EnumStatus['produced'],
		title: 'Produced',
		cards: [],
	},
	{
		id: EnumStatus.done,
		title: 'Done',
		cards: [],
	},
];
