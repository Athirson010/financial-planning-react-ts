import axios from 'axios';

import { responseInterceptor, errorInterceptor } from './interceptors';
import { Environment } from '../environment';

export const Api = axios.create({
  baseURL: Environment.URL_BASE
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

