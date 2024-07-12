import clsx from 'clsx';
import { useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

export const LangButtonts = () => {
  const queryClient = useQueryClient();
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    queryClient.invalidateQueries({
      queryKey: [i18n.language],
    });
  };

  return (
    <div className="flex max-lg:flex-col">
      <button
        className={clsx(
          'border-r-2 border-black px-1 text-sm font-semibold uppercase',
          'max-lg:border-b-2 max-lg:border-r-0 max-lg:px-0 max-lg:py-1',
          i18n.language === 'uk'
            ? 'pointer-events-none text-black'
            : 'text-grayLight',
        )}
        onClick={() => handleLanguageChange('uk')}
      >
        uk
      </button>
      <button
        className={clsx(
          'px-1 text-sm font-semibold uppercase max-lg:px-0 max-lg:py-1',
          i18n.language === 'en'
            ? 'pointer-events-none text-black'
            : 'text-grayLight',
        )}
        onClick={() => handleLanguageChange('en')}
      >
        en
      </button>
    </div>
  );
};
