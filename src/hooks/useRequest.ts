import { useCallback } from 'react';

import { useAbortController } from './useAbortController';

export function useRequest() {
  const { abort } = useAbortController();
  const request = useCallback(
    (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
      const fetchPromise = fetch(input, {
        ...init,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          ...init?.headers,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response;
          }

          throw response;
        })
        .catch((error) => {
          error.message = `Error: ${
            error.error || error.message || error.statusText || 'An unknown error occurred!'
          }`;
          throw error;
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
