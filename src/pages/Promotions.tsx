import clsx from 'clsx';
import { PageTitle } from '../components/ui/PageTitle';
import { useTranslation } from 'react-i18next';
import { useGetPromotions } from '../hooks/useGetPromotions';
import { Section } from '../components/layout/Section';
import { useState } from 'react';

const Promotions = () => {
  const [activeDetailsId, setActiveDetailsId] = useState<number | null>(null);
  const { t } = useTranslation();
  const { promotionsData } = useGetPromotions();

  const toggleDetails = (id: number) => {
    if (id === activeDetailsId) {
      setActiveDetailsId(null);
    } else {
      setActiveDetailsId(id);
    }
  };

  return (
    <Section>
      <PageTitle>{t('promotionsPageTitle')}</PageTitle>
      <div className="flex flex-col">
        {promotionsData.map(({ attributes, id }) => (
          <div
            key={id}
            className="flex w-full flex-col items-center justify-center"
          >
            <img
              className={clsx(
                'w-10/12 rounded-md shadow-md',
                'max-lg:w-full',
                'max-md:rounded-b-none',
              )}
              src={attributes.img.data.attributes.url}
              alt={attributes.title}
            />
            <div
              className={clsx(
                'flex w-1/2 -translate-y-10 flex-col gap-1 rounded-md bg-white p-4 shadow-md',
                'max-lg:w-3/4',
                'max-md:w-full max-md:-translate-y-0 max-md:rounded-t-none max-md:p-2',
              )}
            >
              <h3
                className={clsx(
                  'text-m24 font-semibold text-lightBlue',
                  'max-md:text-m20',
                )}
              >
                {attributes.title}
              </h3>
              <p className="max-md:text-s14">{attributes.subtitle}</p>
              <div
                className={clsx(
                  'grid border-t-2 transition-all duration-300',
                  activeDetailsId === id
                    ? 'grid-rows-[1fr] border-black border-opacity-30 pt-1'
                    : 'grid-rows-[0fr] border-transparent',
                )}
              >
                <p
                  className={clsx(
                    'max-md:text-s14',
                    activeDetailsId === id
                      ? 'overflow-auto scrollbar-none'
                      : 'overflow-hidden',
                  )}
                >
                  {attributes.description}
                </p>
              </div>
              <button
                type="button"
                className={clsx(
                  'w-fit self-end rounded-md border-2 border-white px-2.5 font-medium text-lightBlue transition-all duration-500',
                  'hover:border-darkBlue hover:text-darkBlue',
                  'max-md:text-s14',
                )}
                onClick={() => toggleDetails(id)}
              >
                {activeDetailsId === id ? t('сollapse') : t('details')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Promotions;
