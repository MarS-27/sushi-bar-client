import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTER_PATHS } from '../../utils/routerPaths';
import { NavLink } from './NavLink';

type NavProps = {
  closeNav?: () => void;
};

export const Nav: FC<NavProps> = ({ closeNav }) => {
  const { t } = useTranslation();

  return (
    <div className="max-lg:flex max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:justify-between">
      <nav className="flex gap-3 max-lg:flex-col max-lg:justify-between">
        <NavLink to={ROUTER_PATHS.home}>{t('homePageTitle')}</NavLink>
        <NavLink to={ROUTER_PATHS.promotions}>
          {t('promotionsPageTitle')}
        </NavLink>
        <NavLink to={ROUTER_PATHS.delivery_payment}>
          {t('deliveryAndPaymentPageTitle')}
        </NavLink>
        <NavLink to={ROUTER_PATHS.about}>{t('aboutPageTitle')}</NavLink>
        <NavLink to={ROUTER_PATHS.contacts}>{t('contactsPageTitle')}</NavLink>
      </nav>

      <p className="whitespace-nowrap max-[420px]:text-xs sm:hidden">
        Київ, вул. Ярослава Мудрого, 1
      </p>
    </div>
  );
};
