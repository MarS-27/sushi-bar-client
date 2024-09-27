import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

interface PageTitle {
  children: ReactNode;
}

export const PageTitle: FC<PageTitle> = ({ children }) => {
  return (
    <h1
      className={clsx(
        'py-5 text-l32 font-semibold text-darkBlue',
        'max-md:py-2.5 max-md:text-l28',
      )}
    >
      {children}
    </h1>
  );
};
