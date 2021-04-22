 import AccountsStore from './AccountsStore';

 export default class RootStore {
     constructor() {
        this.accountsStore = new AccountsStore(this);
     }
 }