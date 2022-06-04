import axios from 'axios';
import { config } from "../config/config";
import {
    EXCHANGE_RATES
} from './queries';
import {
    CHANGE_EXCHANGE_RATE_BY_CURRENCY
} from './mutations';

export const serverPath = config.getServerPath();

export default class ApiClient {
    constructor(apolloClient) {
        this.apolloClient = apolloClient;
    }
    
    getExchangeRates = (currency) => {
        return this.apolloClient.query({
            query: EXCHANGE_RATES(currency)
        });
    }

    changeExchangeRateBuCurrency(currency, newRate) {
        return this.apolloClient.mutate({
            mutation: CHANGE_EXCHANGE_RATE_BY_CURRENCY(currency, newRate)
        });
    }
}
