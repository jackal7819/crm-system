interface IAuthStore {
	name: string;
	email: string;
	status: boolean;
}

const defaultValue: { user: IAuthStore } = {
	user: {
		name: '',
		email: '',
		status: false,
	},
};

export const useAuthStore = defineStore('auth', () => {
	const user = ref(defaultValue.user);

	const getUser = () => computed(() => user.value);

	const setUser = (input: IAuthStore) => (user.value = input);

	const removeUser = () => (user.value = defaultValue.user);

	return {
		user,
		getUser,
		setUser,
		removeUser,
	};
});

export const useIsLoadingStore = defineStore('isLoading', () => {
	const isLoading = ref(false);

	const getIsLoading = () => isLoading.value;

	const setIsLoading = (data: boolean) => (isLoading.value = data);

	return {
		isLoading,
		getIsLoading,
		setIsLoading,
	};
});
