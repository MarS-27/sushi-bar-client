import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

interface PageTitleProps {
  children: ReactNode;
}

export const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return (
    <h1
      className={clsx(
        'pt-4 text-l32 font-semibold text-darkBlue',
        'max-md:pt-0 max-md:text-l28',
      )}
    >
      {children}
    </h1>
  );
};
