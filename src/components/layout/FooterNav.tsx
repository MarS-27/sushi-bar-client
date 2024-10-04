import { Link } from 'react-router-dom';
import { ROUTER_PATHS } from '../../utils/routerPaths';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

export const FooterNav = () => {
  const { t } = useTranslation();

  const linkStyle = clsx(
    'relative transition-all duration-500',
    'after:absolute after:w-0 after:transition-all after:duration-500 after:h-0.5 after:bg-darkBlue after:top-[90%] after:left-0 after:hover:w-full',
  );

  return (
    <nav
      className={clsx(
        'flex flex-col gap-2',
        'max-lg:items-center',
        'max-[540px]:hidden',
      )}
    >
      <Link to={ROUTER_PATHS.home} className={linkStyle}>
        {t('homePageTitle')}
      </Link>
      <Link to={ROUTER_PATHS.promotions} className={linkStyle}>
        {t('promotionsPageTitle')}
      </Link>
      <Link to={ROUTER_PATHS.delivery_payment} className={linkStyle}>
        {t('deliveryPageTitle')} {t('and')} {t('paymentPageTitle')}
      </Link>
      <Link to={ROUTER_PATHS.about} className={linkStyle}>
        {t('aboutPageTitle')}
      </Link>
      <Link to={ROUTER_PATHS.contacts} className={linkStyle}>
        {t('contactsPageTitle')}
      </Link>
    </nav>
  );
};
