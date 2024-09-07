import clsx from 'clsx';
import { Logo } from '../ui/Logo';
import { PhoneNumber } from '../ui/PhoneNumber';
import { SocialMediaButtons } from '../ui/SocialMediaButtons';
import { useGetContacts } from '../../hooks/useGetContacts';
import { FooterNav } from './FooterNav';
import visaIcon from '../../assets/visa-logo.svg';
import mastercardIcon from '../../assets/mastercard-logo.svg';
import { FooterContentContainer } from './FooterContentContainer';

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
          'grid w-containerInner max-w-footerContainer grid-cols-4 place-items-stretch gap-3 whitespace-nowrap rounded-md bg-white p-4 shadow-md',
          'max-[540px]:grid-cols-1',
          'max-md:w-full',
          'max-lg:grid-cols-2 max-lg:justify-center',
        )}
      >
        <FooterContentContainer>
          <Logo small={true} />
          <p>{workMode}</p>
        </FooterContentContainer>
        <FooterNav />
        <FooterContentContainer>
          <PhoneNumber />
          {addresses.map((a) => (
            <p key={a.id}>{a.value}</p>
          ))}
        </FooterContentContainer>
        <FooterContentContainer classNameModificator="items-end">
          <SocialMediaButtons />
          <div className="flex items-center gap-2">
            <img className="w-12 min-w-12" src={visaIcon} alt="Visa" />
            <img
              className="w-12 min-w-12"
              src={mastercardIcon}
              alt="Master Card"
            />
          </div>
        </FooterContentContainer>
      </div>
    </footer>
  );
};
