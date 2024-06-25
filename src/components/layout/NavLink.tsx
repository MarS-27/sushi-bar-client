import clsx from 'clsx';
import { type ReactNode, type FC } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

type NavLinkProps = {
  to: string;
  children: ReactNode;
};

export const NavLink: FC<NavLinkProps> = ({ children, to }) => {
  return (
    <RouterLink
      to={to}
      className={({ isActive }) =>
        clsx(
          'bg-0-100 transition-navButton relative rounded-md bg-gradient-to-r from-lightBlue to-lightBlue bg-right bg-no-repeat px-2 py-1 duration-500',
          'hover:bg-100-100 hover:bg-gradient-to-l hover:bg-left hover:text-white',
          isActive && 'bg-lightBlue text-white',
        )
      }
    >
      {children}
    </RouterLink>
  );
};
