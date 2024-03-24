import type { EnumStatus } from '@/types/deals.types';

export interface ICard {
	id: string;
	title: string;
	price: number;
	$createdAt: string;
	companyName: string;
	status: string;
}

export interface IColumn {
	id: EnumStatus;
	title: string;
	cards: ICard[];
}
