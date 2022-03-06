import React, { useEffect, useState, useCallback } from 'react';

import { getLatest } from 'api/exchange-rate-api';

import { GetLatestProps } from 'api/exchange-rate-types';

const useGetLatest = (defaultCurrencieOptions?: string) => {
  const [latest, setLatest] = useState<null | GetLatestProps>(null);
  const [error, setError] = useState<any>(null);

  const getLatestAsync = useCallback(async () => {
    try {
      const data = await getLatest(defaultCurrencieOptions);

      setLatest(data);
    } catch (error) {
      setError(error);
    }
  }, [defaultCurrencieOptions]);

  useEffect(() => {
    getLatestAsync();
  }, [getLatestAsync]);

  return {
    latest,
    error,
  };
};

export { useGetLatest };
