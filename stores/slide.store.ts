import type { ICard } from '~/components/kanban/kanban.types';

const defaultValue: { card: ICard | null; isOpen: boolean } = {
	card: null,
	isOpen: false,
};

export const useSlideStore = defineStore('slide', () => {
	const slide = ref(defaultValue);

	const getSlide = () => slide.value;

	const setSlide = (card: ICard) => (slide.value = { card, isOpen: true });
	const clearSlide = () => (slide.value = defaultValue);
	const toggleSlide = () => (slide.value.isOpen = !slide.value.isOpen);
	return {
		slide,
		getSlide,
		setSlide,
		clearSlide,
		toggleSlide,
	};
});
