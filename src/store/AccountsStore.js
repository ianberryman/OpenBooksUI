import { computed, makeObservable, observable, action } from "mobx";


export default class AccountsStore {
    @observable accountList = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'XGrid', col2: 'is Awesome' },
        { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
    ]

    constructor(rootStore) {
        this.rootStore = rootStore;
        makeObservable(this);
    }

    @computed get accounts() {
        return this.accountList;
    }

    @action.bound addAccount(account) {
        this.accountList.push(account);
    }
}