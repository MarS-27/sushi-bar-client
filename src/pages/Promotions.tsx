import clsx from 'clsx';
import { PageTitle } from '../components/ui/PageTitle';
import { useTranslation } from 'react-i18next';
import { useGetPromotions } from '../hooks/useGetPromotions';

const Promotions = () => {
  const { t } = useTranslation();
  const { promotionsData } = useGetPromotions();
  console.log(promotionsData);

  return (
    <section className={clsx('mb-4 flex flex-col gap-5', 'max-md:gap-2.5')}>
      <PageTitle>{t('promotionsPageTitle')}</PageTitle>
    </section>
  );
};

export default Promotions;
