import axiosInstance from './interceptor';

export const getData: any = (url: string) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(url)
      .then((res: any) => {
        resolve(res);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};
