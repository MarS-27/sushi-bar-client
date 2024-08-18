import { Link } from 'react-router-dom';
import { ROUTER_PATHS } from '../../utils/routerPaths';
import logoIcon from '../../assets/logo-icon.svg';
import { type FC } from 'react';
import clsx from 'clsx';

interface LogoProps {
  small?: boolean;
}

export const Logo: FC<LogoProps> = ({ small }) => {
  return (
    <Link to={ROUTER_PATHS.home} className="flex items-center gap-1">
      <img
        className={clsx(small ? 'size-10 min-w-10' : 'size-12 min-w-12')}
        src={logoIcon}
        alt="logo"
      />
      <div
        className={clsx(
          'flex flex-col items-center font-bold leading-none text-darkBlue',
          small ? 'text-m20' : 'text-m24',
        )}
      >
        <p>SUSHI</p>
        <p>BAR</p>
      </div>
    </Link>
  );
};
