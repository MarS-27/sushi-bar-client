import i18next from 'i18next';
import clsx from 'clsx';
import { useQueryClient } from '@tanstack/react-query';

export const LangButtonts = () => {
  const queryClient = useQueryClient();

  const handleLanguageChange = (lang: string) => {
    i18next.changeLanguage(lang);
    localStorage.setItem('language', lang);
    queryClient.invalidateQueries();
  };

  return (
    <div className="flex max-lg:flex-col">
      <button
        className={clsx(
          i18next.language === 'uk'
            ? 'text-green'
            : 'text-black text-opacity-60',
          'border-r-2 border-black border-opacity-80 px-1 text-sm font-semibold uppercase max-lg:border-b-2 max-lg:border-r-0 max-lg:px-0 max-lg:py-1',
        )}
        onClick={() => handleLanguageChange('uk')}
      >
        uk
      </button>
      <button
        className={clsx(
          i18next.language === 'en'
            ? 'text-green'
            : 'text-black text-opacity-60',
          'px-1 text-sm font-semibold uppercase max-lg:px-0 max-lg:py-1',
        )}
        onClick={() => handleLanguageChange('en')}
      >
        en
      </button>
    </div>
  );
};
