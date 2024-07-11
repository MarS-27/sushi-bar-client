import clsx from 'clsx';
import { type ReactNode, type FC } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

type NavLinkProps = {
  to: string;
  children: ReactNode;
  closeMobileNav?(): void;
};

export const NavLink: FC<NavLinkProps> = ({ children, to, closeMobileNav }) => {
  return (
    <RouterLink
      to={to}
      className={({ isActive }) =>
        clsx(
          'relative rounded-md bg-gradient-to-r from-lightBlue to-lightBlue bg-0-100 bg-right bg-no-repeat px-2 py-1 transition-navButton duration-500',
          'hover:bg-gradient-to-l hover:bg-100-100 hover:bg-left hover:text-white',
          isActive && 'bg-lightBlue text-white',
        )
      }
      onClick={closeMobileNav}
    >
      {children}
    </RouterLink>
  );
};
