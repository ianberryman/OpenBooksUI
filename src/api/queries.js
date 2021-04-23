import { gql } from '@apollo/client';

export const EXCHANGE_RATES = (currency) => gql`
    query GetExchangeRates {
        exchangeRates(currency: "${currency}") {
            currency
            rate
        }
    }
`;