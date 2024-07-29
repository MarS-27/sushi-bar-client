import clsx from 'clsx';
import { useGetCategories } from '../../hooks/useGetCategories';
import { NavLink as MenuCategoryLink } from 'react-router-dom';

export const MenuCategoriesNav = () => {
  const { categoriesData } = useGetCategories();

  return (
    <aside className={clsx('fixed left-4 top-20 z-50')}>
      <nav className="max-h-categoriesMenu flex w-categoriesMenu flex-col justify-start gap-px overflow-y-auto rounded-md bg-white p-0.5 shadow-md scrollbar-none">
        {categoriesData.map(({ id, attributes }) => (
          <MenuCategoryLink
            key={id}
            to={`products/${id}`}
            className={({ isActive }) =>
              clsx(
                'flex flex-col items-center gap-1 rounded-md p-2 text-xs12 font-semibold text-darkBlue transition-all duration-300 hover:bg-lightBlue hover:bg-opacity-30',
                isActive && 'bg-lightBlue bg-opacity-30',
              )
            }
          >
            <img
              className="h-8 w-8 min-w-8"
              src={attributes.icon.data.attributes.url}
              alt={attributes.title}
            />
            <span>{attributes.title}</span>
          </MenuCategoryLink>
        ))}
      </nav>
    </aside>
  );
};
