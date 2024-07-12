import { type FC } from 'react';
import phoneIcon from '../../assets/phone-icon.svg';
import { useGetContacts } from '../../hooks/useGetContacts';
import clsx from 'clsx';

interface PhoneNumberProps {
  classNameModificator?: string;
}

export const PhoneNumber: FC<PhoneNumberProps> = ({ classNameModificator }) => {
  const { contactsData } = useGetContacts();
  const phoneNumber = contactsData?.phone_number;

  return (
    <a
      className={clsx(
        'flex items-center gap-1 text-grayLight transition-all duration-300 hover:text-darkBlue',
        classNameModificator,
      )}
      href={`tel:${phoneNumber.replaceAll(' ', '')}`}
    >
      <img
        className="h-10 w-10 min-w-10 animate-pulse"
        src={phoneIcon}
        alt={phoneNumber}
      />
      <span>{phoneNumber}</span>
    </a>
  );
};
