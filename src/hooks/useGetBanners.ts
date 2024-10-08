import { type AxiosResponse } from 'axios';
import { type ApiCollectionResponse } from '../types/types';
import { useTranslation } from 'react-i18next';
import axiosInstance from '../utils/axiosInstance';
import { useSuspenseQuery } from '@tanstack/react-query';
import { type Banner } from '../types/banner';

export const useGetBanners = () => {
  const { i18n } = useTranslation();

  const getBanners = async (): Promise<ApiCollectionResponse<Banner>> => {
    const result: ApiCollectionResponse<Banner> = await axiosInstance
      .get(`/banners?locale=${i18n.language}&sort=id&populate[0]=img`)
      .then((resp: AxiosResponse<ApiCollectionResponse<Banner>>) => resp.data);

    return result;
  };

  const { data } = useSuspenseQuery({
    queryKey: [i18n.language, 'banners'],
    queryFn: getBanners,
  });

  const bannersData = data?.data;

  return { bannersData };
};
