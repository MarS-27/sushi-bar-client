import clsx from 'clsx';
import { useGetCategories } from '../../hooks/useGetCategories';
import { NavLink as MenuCategoryLink } from 'react-router-dom';

export const MenuCategoriesNav = () => {
  const { categoriesData } = useGetCategories();

  return (
    <div
      className={clsx(
        'fixed left-1/2 top-20 z-10 w-full max-w-container -translate-x-1/2 pl-4',
        'max-md:bottom-0 max-md:left-0 max-md:top-auto max-md:translate-x-0 max-md:pl-0',
      )}
    >
      <nav
        className={clsx(
          'flex max-h-categoriesMenu w-categoriesMenu flex-col justify-start gap-px overflow-auto rounded-md bg-white p-0.5 shadow-md scrollbar-none',
          'justify-between max-md:w-full max-md:flex-row max-md:rounded-none',
        )}
      >
        {categoriesData.map(({ id, attributes }) => (
          <MenuCategoryLink
            key={id}
            to={`products/${id}`}
            className={({ isActive }) =>
              clsx(
                'flex flex-col items-center gap-1 rounded-md p-2 text-xs12 font-semibold text-darkBlue transition-all duration-300',
                'hover:bg-lightBlue hover:bg-opacity-30',
                'max-md:min-w-20',
                isActive && 'bg-lightBlue bg-opacity-30',
              )
            }
          >
            <img
              className="size-8 min-w-8"
              src={attributes.icon.data.attributes.url}
              alt={attributes.title}
            />
            <span>{attributes.title}</span>
          </MenuCategoryLink>
        ))}
      </nav>
    </div>
  );
};
