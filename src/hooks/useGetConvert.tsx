import { useEffect, useState, useCallback } from 'react';

import { getConvert } from 'api/exchange-rate-api';

import { GetConvertProps, QueryConvertProps } from 'api/exchange-rate-types';

const useGetConvert = (query: QueryConvertProps) => {
  const [convert, setConvert] = useState<null | GetConvertProps>(null);
  const [error, setError] = useState<any>(null);

  const getConverttAsync = useCallback(async () => {
    try {
      const data = await getConvert(query);

      setConvert(data);
    } catch (error) {
      setError(error);
    }
  }, [query]);

  useEffect(() => {
    getConverttAsync();
  }, [getConverttAsync]);

  return {
    convert,
    error,
  };
};

export { useGetConvert };
