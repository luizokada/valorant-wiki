import axios from 'axios';
import React from 'react';

const ValorantAPI = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/${import.meta.env.API_VERSION}`,
});

interface AxiosService {
  children: React.ReactNode;
}

const AxiosService = ({ children }: AxiosService) => {
  return <>{children}</>;
};

export { ValorantAPI, AxiosService };
