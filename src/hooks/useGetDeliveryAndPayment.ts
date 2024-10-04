import { useTranslation } from 'react-i18next';
import { type ApiSingleResponse } from '../types/types';
import axiosInstance from '../utils/axiosInstance';
import { type AxiosResponse } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';
import { type DeliveryAndPayment } from '../types/deliveryAndPayment';

export const useGetDeliveryAndPayment = () => {
  const { i18n } = useTranslation();

  const getDeliveryAndPayment = async (): Promise<
    ApiSingleResponse<DeliveryAndPayment>
  > => {
    const result: ApiSingleResponse<DeliveryAndPayment> = await axiosInstance
      .get(
        `/delivery-payment?locale=${i18n.language}&populate[0]=delivery&populate[1]=payment`,
      )
      .then(
        (resp: AxiosResponse<ApiSingleResponse<DeliveryAndPayment>>) =>
          resp.data,
      );

    return result;
  };

  const { data } = useSuspenseQuery({
    queryKey: [i18n.language, 'delivery-payment'],
    queryFn: getDeliveryAndPayment,
  });

  const deliveryAndPaymentData = data?.data.attributes;

  return { deliveryAndPaymentData };
};
