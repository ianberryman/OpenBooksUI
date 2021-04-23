import { gql } from '@apollo/client';

export const EXCHANGE_RATES = (currency) => gql`
    query GetExchangeRates {
        rates(currency: "${currency}") {
            currency
            rate
        }
    }
`;