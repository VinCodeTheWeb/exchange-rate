import { Rates } from 'api/exchange-rate-types';

interface TableCurrenciesProps {
  key: string;
  currency: string;
  rate: number;
}

export const buildTableCurrencies = (rates: Rates): TableCurrenciesProps[] => {
  let currencies: TableCurrenciesProps[] = [];
  let counter = 1;

  for (const [key, value] of Object.entries(rates)) {
    currencies = [...currencies, { key: counter.toString(), currency: key, rate: value }];
    counter++;
  }

  return currencies;
};
