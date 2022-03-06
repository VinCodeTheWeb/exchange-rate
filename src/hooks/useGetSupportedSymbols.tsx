import React, { useEffect, useState } from 'react';

import { getSupportedSymbols } from 'api/exchange-rate-api';

import { GetSupportedSymbolsProps } from 'api/exchange-rate-types';

const useGetSupportedSymbols = () => {
  const [symbols, setSymbols] = useState<null | GetSupportedSymbolsProps>(null);
  const [error, setError] = useState<any>(null);

  const getSupportedSymbolsAsync = async () => {
    try {
      const data = await getSupportedSymbols();

      setSymbols(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getSupportedSymbolsAsync();
  }, []);

  return {
    symbols,
    error,
  };
};

export { useGetSupportedSymbols };
