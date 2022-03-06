export type Rates = {
  [key: string]: number;
};

export type Symbols = {
  [key: string]: string;
};

export type QueryConvertProps = {
  from: string;
  to: string;
  amount: number;
};

export interface GetLatestProps {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Rates;
}

export interface GetSupportedSymbolsProps {
  succes: boolean;
  symbols: Symbols;
}

export interface GetHistoricProps {
  success: boolean;
  historical: string;
  timestamp: number;
  base: string;
  date: string;
  rates: Rates;
}

export interface GetConvertProps {
  success: boolean;
  query: QueryConvertProps;
  info: {
    timestamp: number;
    rate: number;
  };
  historical: true | string;
  date: string;
  result: number;
}
