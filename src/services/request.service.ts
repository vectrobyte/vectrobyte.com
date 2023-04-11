import axios from 'axios';

import RequestError from '../common/errors/RequestError';

export * from 'axios';

const request = axios.create();

request.interceptors.response.use(
  (res) => res,
  (e) => {
    const message = e.response?.data?.message || e.message;

    throw new RequestError({
      message,
      statusCode: e.response?.status,
      response: e.response,
    });
  }
);

export default request;
