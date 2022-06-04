 import AccountsStore from './AccountsStore';
 import { ApolloClient, InMemoryCache } from '@apollo/client';
import UiStore from './UiStore';

 export default class RootStore {
     constructor() {
                 // testing endpoint
        this.apolloClient = new ApolloClient({
            uri: process.env.API_HOST,
            cache: new InMemoryCache()
        });
        this.accountsStore = new AccountsStore(this);
        this.uiStore = new UiStore(this);
     }
 }