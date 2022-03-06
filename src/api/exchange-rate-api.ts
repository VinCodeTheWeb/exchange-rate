import axios from 'axios';

import {
  GetHistoricProps,
  GetLatestProps,
  GetSupportedSymbolsProps,
  GetConvertProps,
  QueryConvertProps,
} from 'api/exchange-rate-types';

const getExchangeInstance = () => {
  return axios.create({
    baseURL: 'http://api.exchangeratesapi.io/v1',
  });
};

export const getLatest = async (symbols?: string) => {
  const response = await getExchangeInstance().get<GetLatestProps>(`/latest`, {
    params: {
      access_key: process.env.REACT_APP_EXCHANGE_API_KEY,
      symbols,
    },
  });

  return response.data;
};

export const getSupportedSymbols = async () => {
  const response = await getExchangeInstance().get<GetSupportedSymbolsProps>(`/symbols`, {
    params: {
      access_key: process.env.REACT_APP_EXCHANGE_API_KEY,
    },
  });

  return response.data;
};

export const getHistoric = async (date: string) => {
  const response = await getExchangeInstance().get<GetHistoricProps>(`/${date}`, {
    params: {
      access_key: process.env.REACT_APP_EXCHANGE_API_KEY,
    },
  });

  return response.data;
};

export const getConvert = async (query: QueryConvertProps) => {
  const response = await getExchangeInstance().get<GetConvertProps>(`/convert`, {
    params: {
      access_key: process.env.REACT_APP_EXCHANGE_API_KEY,
      ...query,
    },
  });

  return response.data;
};
