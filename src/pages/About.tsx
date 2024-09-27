import { useTranslation } from 'react-i18next';
import { PageTitle } from '../components/ui/PageTitle';
import { useGetAbout } from '../hooks/useGetAbout';
import clsx from 'clsx';

const About = () => {
  const { t } = useTranslation();
  const { aboutData } = useGetAbout();

  return (
    <section
      className={clsx(
        'flex max-w-3xl flex-col gap-5 pb-2.5',
        'max-md:gap-2.5 max-md:pb-0',
      )}
    >
      <PageTitle>{t('aboutPageTitle')}</PageTitle>
      {aboutData.paragraphs.map((p) => (
        <p key={p.id} className="max-md:text-s14">
          {p.value}
        </p>
      ))}
    </section>
  );
};

export default About;
