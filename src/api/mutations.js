import { gql } from '@apollo/client';

export const CHANGE_EXCHANGE_RATE_BY_CURRENCY = (currency, newRate) => gql`
    mutation changeExchangeRateByCurrency {
        changeExchangeRateForCurrency(currency: "${currency}", newRate: ${newRate}) {
            currency
            rate
        }
    }
`;