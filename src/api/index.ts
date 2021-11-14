import { config } from './config';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosInstance: AxiosInstance = axios.create(getAxiosOptions());

function getAxiosOptions(
  authorization?: string,
  type?: string
): AxiosRequestConfig {
  const options: AxiosRequestConfig = {
    baseURL: config.apiHost,
    headers: {},
  };
  if (options.headers) {
    switch (type) {
      case 'file':
        options.headers['Content-Type'] = 'multipart/form-data';
        break;
      default:
        options.headers['Content-Type'] = 'application/json';
        break;
    }
    if (authorization) {
      options.headers['Authorization'] = authorization;
    }
  }

  return options;
}

const doGet = <T>(address: string) => {
  return axiosInstance.get<T>(address);
};

const doPost = (address: string, data: any) => {
  const stringData = JSON.stringify(data);
  return axiosInstance({
    method: 'post',
    url: address,
    data: stringData,
  });
};

class API {
  private async doGet<T = any>(...args: Parameters<typeof doGet>) {
    try {
      const response = (await doGet(...args)).data as T;
      return response;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  public getProfiles = async () => {
    const response = await this.doGet<Components.IProfiles[]>('/data');
    return response;
  };
}

export const api = new API();
