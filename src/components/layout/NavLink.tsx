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
          clsx(
            'relative transition-all duration-300',
            'after:absolute after:left-0 after:top-[90%] after:h-0.5 after:w-0 after:bg-lightBlue after:transition-all after:duration-300 hover:text-lightBlue hover:transition-all hover:duration-300',
            'after:hover:w-full after:hover:transition-all after:hover:duration-300',
            isActive &&
              'text-lightBlue after:absolute after:left-0 after:top-[90%] after:h-0.5 after:w-full after:bg-lightBlue',
          ),
        )
      }
    >
      {children}
    </RouterLink>
  );
};
