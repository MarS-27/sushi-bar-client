import { type FC } from 'react';
import clsx from 'clsx';

interface BurgerButttonProps {
  isOpenMenu: boolean;
  handleToggleMenu(): void;
}

export const BurgerButton: FC<BurgerButttonProps> = ({
  isOpenMenu,
  handleToggleMenu,
}) => {
  return (
    <button
      className={clsx(
        'flex h-8 w-10 min-w-[40px] flex-col items-center justify-between p-1 lg:hidden',
      )}
      onClick={handleToggleMenu}
    >
      <div
        className={clsx(
          'h-1 w-full rounded-sm bg-darkBlue transition-all duration-300',
          isOpenMenu ? 'translate-y-[10px] rotate-45' : null,
        )}
      ></div>
      <div
        className={clsx(
          'h-1 w-full rounded-sm transition-all duration-300',
          isOpenMenu ? '-translate-x-5 bg-transparent' : 'bg-darkBlue',
        )}
      ></div>
      <div
        className={clsx(
          'h-1 w-full rounded-sm bg-darkBlue transition-all duration-300',
          isOpenMenu ? '-translate-y-[10px] -rotate-45' : null,
        )}
      ></div>
    </button>
  );
};
