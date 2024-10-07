import { PageTitle } from '../components/ui/PageTitle';
import { useTranslation } from 'react-i18next';
import { useGetContacts } from '../hooks/useGetContacts';
import { PhoneNumber } from '../components/ui/PhoneNumber';
import { Section } from '../components/layout/Section';

export const Contacts = () => {
  const { t } = useTranslation();
  const { contactsData } = useGetContacts();

  return (
    <Section>
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
    </Section>
  );
};

export default Contacts;
