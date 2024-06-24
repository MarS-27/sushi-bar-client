import { Nav } from './Nav';

export const Header = () => {
  return (
    <header className="h-headerHeight fixed inset-0 z-50 flex w-full items-center bg-white font-medium text-grayDark shadow-md">
      <div className="mx-auto flex w-full max-w-container items-center justify-between px-4">
        <Nav />
      </div>
    </header>
  );
};
