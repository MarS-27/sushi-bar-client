import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../components/ui/PageTitle';
import { useGetDeliveryAndPayment } from '../hooks/useGetDeliveryAndPayment';

const DeliveryAndPayment = () => {
  const { t } = useTranslation();
  const { deliveryAndPaymentData } = useGetDeliveryAndPayment();
  const { delivery, payment } = deliveryAndPaymentData;

  return (
    <section className={clsx('flex flex-col gap-5', 'max-md:gap-2.5')}>
      <PageTitle>{t('deliveryAndPaymentPageTitle')}</PageTitle>
      <div>Content</div>
    </section>
  );
};

export default DeliveryAndPayment;
