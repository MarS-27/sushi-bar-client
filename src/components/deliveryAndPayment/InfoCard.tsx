import { type FC } from 'react';
import clsx from 'clsx';

interface InfoCardProps {
  title: string;
  description: string;
}

export const InfoCard: FC<InfoCardProps> = ({ title, description }) => {
  return (
    <div
      className={clsx(
        'w-1/2 rounded-md bg-white p-5 shadow-md',
        'max-sm:w-full max-sm:p-3',
      )}
    >
      <p
        className={clsx(
          'mb-5 text-m20 font-semibold',
          'max-sm:mb-3 max-sm:text-s16',
        )}
      >
        {title}
      </p>
      <p className="max-sm:text-s14">{description}</p>
    </div>
  );
};
