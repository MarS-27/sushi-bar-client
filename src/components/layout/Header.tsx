import { Link } from 'react-router-dom';
import { Nav } from './Nav';
import { ROUTER_PATHS } from '../../utils/routerPaths';
import logoIcon from '../../assets/logo-icon.svg';
import { useState } from 'react';
import clsx from 'clsx';
import { BurgerButton } from '../ui/BurgerButton';
import { LangButtonts } from '../ui/LangButtons';
import { SocialMediaButtons } from '../ui/SocialMediaButtons';
import { PhoneNumber } from '../ui/PhoneNumber';

export const Header = () => {
  const [isOpenMenu, toggleOpenMenu] = useState(false);

  return (
    <header className="fixed z-50 flex h-headerHeight w-full items-center bg-white font-medium text-grayDark shadow-md">
      <div className="mx-auto flex w-full max-w-container items-center justify-between px-4">
        <Link to={ROUTER_PATHS.home} className="flex items-center gap-1">
          <img className="size-12 min-w-12" src={logoIcon} alt="logo" />
          <div className="flex flex-col items-center text-m24 font-bold leading-none text-darkBlue">
            <p>SUSHI</p>
            <p>BAR</p>
          </div>
        </Link>
        <div
          className={clsx(
            'transition-all duration-300',
            'max-lg:visible max-lg:fixed max-lg:left-0 max-lg:top-[65px] max-lg:h-mobileMenu max-lg:w-full max-lg:overflow-hidden max-lg:bg-lightBlue max-lg:bg-opacity-30 max-lg:backdrop-blur-sm',
            !isOpenMenu ? 'max-lg:invisible max-lg:h-0 max-lg:opacity-0' : null,
          )}
          onClick={() => toggleOpenMenu(false)}
        >
          <div
            className={clsx(
              'flex items-center gap-5 max-sm:w-full',
              'max-lg:ml-auto max-lg:h-full max-lg:w-1/4 max-lg:min-w-[300px] max-lg:items-start max-lg:justify-evenly max-lg:bg-white max-lg:pb-[20px] max-lg:pl-5 max-lg:pr-3 max-lg:pt-[10px]',
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <Nav closeMobileNav={() => isOpenMenu && toggleOpenMenu(false)} />
            <div className="max-lg:flex max-lg:h-full max-lg:flex-col max-lg:justify-between">
              <LangButtonts />
              <SocialMediaButtons classNameModificator="flex-col lg:hidden" />
            </div>
            <PhoneNumber classNameModificator="max-lg:hidden" />
          </div>
        </div>
        <BurgerButton
          isOpenMenu={isOpenMenu}
          handleToggleMenu={() => toggleOpenMenu(!isOpenMenu)}
        />
      </div>
    </header>
  );
};
