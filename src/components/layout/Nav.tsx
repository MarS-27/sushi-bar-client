import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ROUTER_PATHS } from '../../utils/routerPaths';
import { NavLink } from './NavLink';
import { PhoneNumber } from '../ui/PhoneNumber';

interface NavProps {
  closeMobileNav(): void;
}

export const Nav: FC<NavProps> = ({ closeMobileNav }) => {
  const { t } = useTranslation();

  return (
    <div className="max-lg:flex max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:justify-between">
      <nav className="flex gap-3 max-lg:flex-col max-lg:justify-between">
        <NavLink to={ROUTER_PATHS.home} closeMobileNav={closeMobileNav}>
          {t('homePageTitle')}
        </NavLink>
        <NavLink to={ROUTER_PATHS.promotions} closeMobileNav={closeMobileNav}>
          {t('promotionsPageTitle')}
        </NavLink>
        <NavLink
          to={ROUTER_PATHS.delivery_payment}
          closeMobileNav={closeMobileNav}
        >
          {t('deliveryPageTitle')} {t('and')} {t('paymentPageTitle')}
        </NavLink>
        <NavLink to={ROUTER_PATHS.about} closeMobileNav={closeMobileNav}>
          {t('aboutPageTitle')}
        </NavLink>
        <NavLink to={ROUTER_PATHS.contacts} closeMobileNav={closeMobileNav}>
          {t('contactsPageTitle')}
        </NavLink>
      </nav>
      <PhoneNumber classNameModificator="lg:hidden" />
    </div>
  );
};
