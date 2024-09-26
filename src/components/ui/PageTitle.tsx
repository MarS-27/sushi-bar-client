import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

interface PageTitle {
  children: ReactNode;
  divider?: boolean;
}

export const PageTitle: FC<PageTitle> = ({ children, divider = false }) => {
  return (
    <h1
      className={clsx(
        'py-5 text-l32 font-semibold text-darkBlue',
        'max-md:py-2.5 max-md:text-l28',
        divider && 'border-b-2 border-darkBlue border-opacity-60',
      )}
    >
      {children}
    </h1>
  );
};
