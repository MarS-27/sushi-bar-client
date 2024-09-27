import { useSuspenseQuery } from '@tanstack/react-query';
import { type About } from '../types/about';
import { type AxiosResponse } from 'axios';
import { type ApiSingleResponse } from '../types/types';
import { useTranslation } from 'react-i18next';
import axiosInstance from '../utils/axiosInstance';

export const useGetAbout = () => {
  const { i18n } = useTranslation();

  const getAbout = async (): Promise<ApiSingleResponse<About>> => {
    const result: ApiSingleResponse<About> = await axiosInstance
      .get(`/about?locale=${i18n.language}&populate=paragraphs`)
      .then((resp: AxiosResponse<ApiSingleResponse<About>>) => resp.data);

    return result;
  };

  const { data } = useSuspenseQuery({
    queryKey: [i18n.language, 'about'],
    queryFn: getAbout,
  });

  const aboutData = data?.data.attributes;

  return { aboutData };
};
