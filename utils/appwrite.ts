import { Account, Client, Databases, Storage } from 'appwrite';

export const useAppwriteClient = () => {
	const config = useRuntimeConfig();
	const client = new Client()
		.setEndpoint('https://cloud.appwrite.io/v1')
		.setProject(config.public.appWriteId);
		
	const account = new Account(client);
	const database = new Databases(client);
	const storage = new Storage(client);
	return { client, account, database, storage };
};
