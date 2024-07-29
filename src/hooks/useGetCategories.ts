import { type AxiosResponse } from 'axios';
import { type ApiCollectionResponse } from '../types/types';
import { useTranslation } from 'react-i18next';
import axiosInstance from '../utils/axiosInstance';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Category } from '../types/category';

export const useGetCategories = () => {
  const { i18n } = useTranslation();

  const getCategories = async (): Promise<ApiCollectionResponse<Category>> => {
    const result: ApiCollectionResponse<Category> = await axiosInstance
      .get(`/categories?locale=${i18n.language}&sort=id&populate=icon`)
      .then(
        (resp: AxiosResponse<ApiCollectionResponse<Category>>) => resp.data,
      );

    return result;
  };

  const {
    data,
    error,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useSuspenseQuery({
    queryKey: [i18n.language, 'categories'],
    queryFn: getCategories,
  });

  const categoriesData = data?.data;

  return { categoriesData, isCategoriesLoading, isCategoriesError, error };
};
