import axios from 'axios';
import { config } from "../config/config";
import {
    EXCHANGE_RATES
} from './queries';

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
}
