import clsx from 'clsx';
import type { ReactNode, FC } from 'react';

interface SectionProps {
  children: ReactNode;
  classModificator?: string;
}

export const Section: FC<SectionProps> = ({ children, classModificator }) => {
  return (
    <section
      className={clsx(
        'mb-2.5 flex flex-col gap-5',
        'max-md:mb-0 max-md:gap-2.5',
        classModificator,
      )}
    >
      {children}
    </section>
  );
};
