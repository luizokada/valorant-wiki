import axios from 'axios';
import React from 'react';

const ValorantAPI = axios.create({
  baseURL: `https://valorant-api.com/v1`,
});

interface AxiosService {
  children: React.ReactNode;
}

const AxiosService = ({ children }: AxiosService) => {
  return <>{children}</>;
};

export { ValorantAPI, AxiosService };
