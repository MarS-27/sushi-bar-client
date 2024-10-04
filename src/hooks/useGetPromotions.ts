import { useTranslation } from 'react-i18next';
import { ApiCollectionResponse } from '../types/types';
import axiosInstance from '../utils/axiosInstance';
import { AxiosResponse } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Promotions } from '../types/promotions';

export const useGetPromotions = () => {
  const { i18n } = useTranslation();

  const getPromotions = async (): Promise<
    ApiCollectionResponse<Promotions>
  > => {
    const result: ApiCollectionResponse<Promotions> = await axiosInstance
      .get(`/promotions?locale=${i18n.language}&sort=id&populate=img`)
      .then(
        (resp: AxiosResponse<ApiCollectionResponse<Promotions>>) => resp.data,
      );

    return result;
  };

  const { data } = useSuspenseQuery({
    queryKey: [i18n.language, 'promotions'],
    queryFn: getPromotions,
  });

  const promotionsData = data?.data;

  return { promotionsData };
};
