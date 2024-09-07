import clsx from 'clsx';
import { FC, ReactNode } from 'react';

interface FooterContentContainerProps {
  children: ReactNode;
  classNameModificator?: string;
}

export const FooterContentContainer: FC<FooterContentContainerProps> = ({
  children,
  classNameModificator,
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-start gap-3',
        'max-lg:items-center',
        classNameModificator,
      )}
    >
      {children}
    </div>
  );
};
