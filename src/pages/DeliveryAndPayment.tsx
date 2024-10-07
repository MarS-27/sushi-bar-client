import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../components/ui/PageTitle';
import { useGetDeliveryAndPayment } from '../hooks/useGetDeliveryAndPayment';
import { InfoCard } from '../components/deliveryAndPayment/InfoCard';
import { Section } from '../components/layout/Section';

const DeliveryAndPayment = () => {
  const { t } = useTranslation();
  const { deliveryAndPaymentData } = useGetDeliveryAndPayment();
  const { delivery, payment } = deliveryAndPaymentData;

  return (
    <Section>
      <PageTitle>{t('deliveryPageTitle')}</PageTitle>
      <div className={clsx('flex gap-5', 'max-sm:flex-col')}>
        {delivery.map((d) => (
          <InfoCard key={d.id} title={d.title} description={d.description} />
        ))}
      </div>
      <PageTitle>{t('paymentPageTitle')}</PageTitle>
      <div className={clsx('flex gap-5', 'max-sm:flex-col')}>
        {payment.map((p) => (
          <InfoCard key={p.id} title={p.title} description={p.description} />
        ))}
      </div>
    </Section>
  );
};

export default DeliveryAndPayment;
