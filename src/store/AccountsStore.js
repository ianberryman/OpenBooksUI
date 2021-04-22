import { computed, makeAutoObservable, observable, action } from "mobx";


export default class AccountsStore {
    accountList = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'XGrid', col2: 'is Awesome' },
        { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
    ]

    constructor() {
        makeAutoObservable(this);
    }

    get accounts() {
        return this.accountList;
    }

    addAccount(account) {
        this.accountList.push(account);
    }
}