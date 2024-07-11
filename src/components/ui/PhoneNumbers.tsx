import phoneIcon from '../../assets/phone-icon.svg';
import { useGetContacts } from '../../hooks/useGetContacts';

export const PhoneNumbers = () => {
  const { contactsData } = useGetContacts();
  const phoneNumbers = contactsData?.phone_numbers;
  console.log(phoneNumbers);

  if (!phoneNumbers.length) {
    return null;
  }

  return (
    <>
      {phoneNumbers.length === 1 ? (
        <a className="" href={`tel:${phoneNumbers[0].value}`}>
          <img
            className="h-10 w-10 min-w-10 animate-pulse"
            src={phoneIcon}
            alt={phoneNumbers[0].value}
          />
          <span>{phoneNumbers[0].value}</span>
        </a>
      ) : null}
    </>
  );
};
