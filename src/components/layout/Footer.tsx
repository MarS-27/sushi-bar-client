import clsx from 'clsx';
import { Logo } from '../ui/Logo';
import { PhoneNumber } from '../ui/PhoneNumber';
import { SocialMediaButtons } from '../ui/SocialMediaButtons';
import { useGetContacts } from '../../hooks/useGetContacts';
import { FooterNav } from './FooterNav';

export const Footer = () => {
  const { contactsData } = useGetContacts();
  const workMode = contactsData?.work_mode;
  const addresses = contactsData?.addresses;

  return (
    <footer
      className={clsx(
        'z-30 mx-auto flex w-full max-w-container justify-end px-4 py-4 font-medium text-darkBlue',
      )}
    >
      <div
        className={clsx(
          'max-w-footerContainer w-containerInner flex items-start justify-between gap-3 rounded-md bg-white p-4 shadow-md',
          'max-md:w-full',
        )}
      >
        <div className="flex flex-col items-center gap-3">
          <Logo small={true} />
          <p>{workMode}</p>
        </div>
        <FooterNav />
        <div className="flex flex-col items-start gap-3">
          <PhoneNumber />
          {addresses.map((a) => (
            <p key={a.id}>{a.value}</p>
          ))}
        </div>
        <SocialMediaButtons />
      </div>
    </footer>
  );
};
