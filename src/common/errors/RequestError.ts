import { AxiosResponse } from 'axios';

import AppError from './AppError';

export default class RequestError extends AppError {
  public message: string;
  public statusCode?: number;
  public response?: AxiosResponse;

  constructor(options: { message: string; statusCode?: number; response?: AxiosResponse }) {
    super(options.message);
    this.isExpected = false;
    this.message = options.message;
    this.statusCode = options.statusCode;
    this.response = options.response;
  }

  /**
   * --------------------------------------------------
   * Returns an object with properties
   * --------------------------------------------------
   * @return {Object}
   * --------------------------------------------------
   */
  public toJson() {
    return { ...this };
  }

  /**
   * --------------------------------------------------
   * Returns an object with properties
   * --------------------------------------------------
   * @return {Object}
   * --------------------------------------------------
   */
  public getResponseData<T>(): T {
    if (this.response && this.response.data) {
      return this.response.data as T;
    }

    throw new AppError('Error is missing response data');
  }
}
