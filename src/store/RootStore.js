 import AccountsStore from './AccountsStore';
 import { ApolloClient, InMemoryCache } from '@apollo/client';
import UiStore from './UiStore';

 export default class RootStore {
     constructor() {
                 // testing endpoint
        this.apolloClient = new ApolloClient({
            uri: 'https://48p1r2roz4.sse.codesandbox.io',
            cache: new InMemoryCache()
        });
        this.accountsStore = new AccountsStore(this);
        this.uiStore = new UiStore(this);
     }
 }