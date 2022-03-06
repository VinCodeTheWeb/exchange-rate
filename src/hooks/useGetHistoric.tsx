import { useEffect, useState, useCallback } from 'react';

import { getHistoric } from 'api/exchange-rate-api';

import { GetHistoricProps } from 'api/exchange-rate-types';

const useGetHistoric = (date: string | undefined) => {
  const [historic, setHistoric] = useState<null | GetHistoricProps>(null);
  const [error, setError] = useState<any>(null);

  const getHistotAsync = useCallback(async () => {
    try {
      if (!date) return;

      const data = await getHistoric(date);

      setHistoric(data);
    } catch (error) {
      setError(error);
    }
  }, [date]);

  useEffect(() => {
    getHistotAsync();
  }, [getHistotAsync]);

  return {
    historic,
    error,
  };
};

export { useGetHistoric };
