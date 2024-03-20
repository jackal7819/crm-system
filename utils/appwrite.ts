import { Account, Client, Databases, Storage } from 'appwrite';

export const client = new Client();

client
	.setEndpoint('https://cloud.appwrite.io/v1')
	.setProject(process.env.NUXT_APP_WRITE_ID!);

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
