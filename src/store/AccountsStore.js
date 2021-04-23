import { computed, makeObservable, observable, action, reaction, runInAction } from "mobx";
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

    async retrieveExchangeRatesByCurrency(currency) {
        var response = await this.apiClient.getExchangeRates(currency);
        runInAction(()=> {
            this.exchangeRateList = response.data.rates.map(rate => new ExchangeRate(this, { ...rate, id: Math.random() } ))
        });
    }
}

export class Account {
    @observable id
    @observable name
    @observable accountType
    @observable balance
    @observable isSystemAccount

    constructor(store) {
        this.store = store;

        makeObservable(this);
    }
}

export class ExchangeRate {
    @observable id
    @observable currency
    @observable rate

    constructor(store, json) {
        this.store = store;
        //init from json object
        this.fromJson(json);

        makeObservable(this);

        this.save = reaction(
            () => this.asJson(),
            json => console.log("send to server")
        )
    }

    @action.bound setId(id) {
        this.id = id;
    }

    @action.bound setCurrency(currency) {
        this.currency = currency;
    }

    @action.bound setRate(rate) {
        this.rate = rate;
    }

    fromJson(json) {
        this.setId(json.id);
        this.setCurrency(json.currency);
        this.setRate(json.rate);
    }

    asJson() {
        return {
            id: this.id,
            currency: this.currency,
            rate: this.rate
        }
    }
}