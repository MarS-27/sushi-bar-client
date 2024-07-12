import { useSuspenseQuery } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';
import { type Contacts } from '../types/contacts';
import { type ApiSingleResponse } from '../types/types';
import { useTranslation } from 'react-i18next';
import axiosInstance from '../utils/axiosInstance';

export const useGetContacts = () => {
  const { i18n } = useTranslation();

  const getContacts = async (): Promise<ApiSingleResponse<Contacts>> => {
    const result: ApiSingleResponse<Contacts> = await axiosInstance
      .get(
        `/contact?locale=${i18n.language}&populate[0]=social_media&populate[1]=social_media.icon&populate[2]=addresses`,
      )
      .then((resp: AxiosResponse<ApiSingleResponse<Contacts>>) => resp.data);

    return result;
  };

  const {
    data,
    error,
    isLoading: isContactsLoading,
    isError: isContactsError,
  } = useSuspenseQuery({
    queryKey: [i18n.language, 'contacts'],
    queryFn: getContacts,
  });

  const contactsData = data?.data.attributes;

  return { contactsData, isContactsLoading, isContactsError, error };
};
