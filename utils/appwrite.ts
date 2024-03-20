import { Account, Client, Databases, Storage } from 'appwrite';

const { idApp } = useRuntimeConfig();

export const client = new Client();
export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(idApp);