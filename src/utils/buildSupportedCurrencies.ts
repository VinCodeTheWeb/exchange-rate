import { Rates, Symbols } from 'api/exchange-rate-types';

export const buildSuportedCurrencies = (
  supportedCurrencies: Rates | Symbols
): { [key: string]: string }[] => {
  let currencies: { [key: string]: string }[] = [];

  for (const [key, value] of Object.entries(supportedCurrencies)) {
    currencies = [...currencies, { [key]: value }];
  }

  return currencies;
};
