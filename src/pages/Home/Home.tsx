import React, { useState } from 'react';

import { HomeTemplate } from 'templates/HomeTemplate/HomeTemplate';

import { Search } from 'components/Search/Search';
import { ExchangeRate } from 'components/ExchangeRate/ExchangeRate';
import { DateTime } from 'components/DateTime/DateTime';
import { TableCurrencies } from 'components/TableCurrencies/TableCurrencies';

import { useGetLatest } from 'hooks/useGetLastest';
import { useGetSupportedSymbols } from 'hooks/useGetSupportedSymbols';
import { useGetHistoric } from 'hooks/useGetHistoric';

import { buildTableCurrencies } from 'utils/buildTableCurrencies';

const DEFAULT_CURRENCIE_OPTIONS1 = 'EUR';
const DEFAULT_CURRENCIE_OPTIONS2 = 'USD';

const Home = () => {
  const [currenciesOptions, setCurrenciesOptions] = useState({
    defaultCurrencieOption1: DEFAULT_CURRENCIE_OPTIONS1,
    defaultCurrencieOption2: DEFAULT_CURRENCIE_OPTIONS2,
  });

  const { latest } = useGetLatest(
    `${currenciesOptions.defaultCurrencieOption1}, ${currenciesOptions.defaultCurrencieOption2}`
  );

  const { historic } = useGetHistoric(latest?.date);

  const { symbols } = useGetSupportedSymbols();

  if (!latest || !symbols || !historic) return null;

  const handleSearchClick = (searchAmount: string): void => {
    if (!searchAmount) return;
  };

  return (
    <HomeTemplate
      search={
        <Search
          defaultCurrencieOption1={latest.base}
          defaultCurrencieOption2={currenciesOptions.defaultCurrencieOption2}
          onChangeOption1={(defaultCurrencieOption1) =>
            setCurrenciesOptions({ ...currenciesOptions, defaultCurrencieOption1 })
          }
          onChangeOption2={(defaultCurrencieOption2) =>
            setCurrenciesOptions({ ...currenciesOptions, defaultCurrencieOption2 })
          }
          supportedCurrenciesOptions={symbols.symbols}
          onSearchIconClick={handleSearchClick}
          onChangeAmount={(e) => console.log(e)}
        />
      }
      exchangeRate={
        <ExchangeRate
          currency={latest.base}
          totalAmount={historic.rates[
            currenciesOptions.defaultCurrencieOption1
          ].toString()}
          currentExchangeRate={historic.rates[
            currenciesOptions.defaultCurrencieOption2
          ].toString()}
        />
      }
      dateTime={<DateTime timestamp={latest.timestamp} />}
      tableCurrencies={<TableCurrencies table={buildTableCurrencies(historic.rates)} />}
    />
  );
};

export default Home;
