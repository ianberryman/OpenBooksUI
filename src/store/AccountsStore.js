import { computed, makeObservable, observable, action } from "mobx";
import { graphql } from '@apollo/client/react/hoc';
import ApiClient from '../api/api';


export default class AccountsStore {
    @observable accountList = [];
    @observable exchangeRateList = [];

    constructor(rootStore) {
        makeObservable(this);

        this.rootStore = rootStore;
        this.apiClient = new ApiClient(rootStore.apolloClient);

        this.retrieveExchangeRatesByCurrency("USD");
    }



    @computed get accounts() {
        return this.accountList;
    }

    @action.bound addAccount(account) {
        this.accountList.push(account);
    }

    @computed get exchangeRates() {
        return this.exchangeRateList;
    }

    @action.bound async retrieveExchangeRatesByCurrency(currency) {
        var response = await this.apiClient.getExchangeRates(currency);
        this.exchangeRateList = response.data.rates.map(rate => ( {...rate, id: Math.random()} ));
    }
}

export class Account {

}