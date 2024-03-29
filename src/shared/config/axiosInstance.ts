import axios from 'axios';

import AppLocalStorageAPI from '../api/appLocalStorage';

export const { API_URL } = process.env;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  const updatedConfig = config;
  const accessToken = AppLocalStorageAPI.getAccessToken();
  updatedConfig.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config.isRetry) {
      originalRequest.isRetry = true;
      try {
        const response = await axios.get<any>(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        AppLocalStorageAPI.updateAccessToken(response.data.accessToken);
        return $api.request(originalRequest);
      } catch {
        /* empty */
        AppLocalStorageAPI.deleteAccessToken();
        window.location.href = '/sign-in';
      }
    }
    throw error;
  },
);

export default $api;
