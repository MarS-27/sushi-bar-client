import { useTranslation } from 'react-i18next';
import { PageTitle } from '../components/ui/PageTitle';
import { useGetAbout } from '../hooks/useGetAbout';
import { Section } from '../components/layout/Section';

const About = () => {
  const { t } = useTranslation();
  const { aboutData } = useGetAbout();

  return (
    <Section classModificator="max-w-3xl">
      <PageTitle>{t('aboutPageTitle')}</PageTitle>
      {aboutData.paragraphs.map((p) => (
        <p key={p.id} className="max-md:text-s14">
          {p.value}
        </p>
      ))}
    </Section>
  );
};

export default About;
