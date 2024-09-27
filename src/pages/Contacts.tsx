import clsx from 'clsx';
import { PageTitle } from '../components/ui/PageTitle';
import { useTranslation } from 'react-i18next';
import { useGetContacts } from '../hooks/useGetContacts';
import { PhoneNumber } from '../components/ui/PhoneNumber';

export const Contacts = () => {
  const { t } = useTranslation();
  const { contactsData } = useGetContacts();

  return (
    <section className={clsx('flex flex-col gap-5', 'max-md:gap-2.5')}>
      <PageTitle>{t('contactsPageTitle')}</PageTitle>
      <div>
        <p className="font-semibold">{t('addressTitle')}:</p>
        {contactsData.addresses.map((a) => (
          <p key={a.id}>{a.value}</p>
        ))}
      </div>
      <div>
        <p className="font-semibold">{t('workModeTitle')}:</p>
        <p>{contactsData.work_mode}</p>
      </div>
      <div>
        <p className="font-semibold">{t('phoneNumberTitle')}:</p>
        <PhoneNumber />
      </div>
    </section>
  );
};

export default Contacts;
