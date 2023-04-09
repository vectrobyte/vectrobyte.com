import { useCallback } from 'react';

import { useAbortController } from './useAbortController';

export function useRequest() {
  const { abort } = useAbortController();
  const request = useCallback(
    (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
      const fetchPromise = fetch(input, init).then((response) => {
        if (response.ok) {
          return response;
        }

        throw response;
      });

      abort();

      return fetchPromise.then(
        (response) => {
          return response;
        },
        (error) => {
          throw error;
        }
      );
    },
    [abort]
  );

  return { request };
}
