import { useSuspenseQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import configuration from '../configuration';
import { Contacts } from '../types/contacts';
import { ApiSingleResponse } from '../types/types';
import i18next from 'i18next';

export const useGetContacts = () => {
  const getContacts = async (): Promise<ApiSingleResponse<Contacts>> => {
    const result: ApiSingleResponse<Contacts> = await axios
      .get(
        `${configuration.apiUrl}/contact?locale=${i18next.language}&populate[0]=social_media&populate[1]=social_media.icon&populate[2]=addresses&populate[3]=phone_numbers`,
        {
          headers: {
            Authorization: `Bearer ${configuration.apiToken}`,
          },
        },
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
    queryKey: ['contacts'],
    queryFn: getContacts,
  });

  const contactsData = data?.data.attributes;

  return { contactsData, isContactsLoading, isContactsError, error };
};
