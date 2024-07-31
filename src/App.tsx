import { Outlet } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import { MenuCategoriesNav } from './components/layout/MenuCategoriesNav';
import clsx from 'clsx';

const App = () => {
  return (
    <div
      className={clsx(
        'flex min-h-dvh flex-col items-center bg-mainBg font-montserrat text-black',
        'max-md:pb-20',
      )}
    >
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <div>
                There was an error!{' '}
                <button onClick={() => resetErrorBoundary()}>Try again</button>
                <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
              </div>
            )}
            onReset={reset}
          >
            <Suspense fallback={<h1>Loading...</h1>}>
              <Header />
              <MenuCategoriesNav />
              <main className="mt-20 flex w-full max-w-container flex-1 justify-end px-4">
                <div
                  className={clsx(
                    'w-mainInner relative z-30',
                    'max-md:static max-md:z-0 max-md:w-full',
                  )}
                >
                  <Outlet />
                </div>
              </main>
              <Footer />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </div>
  );
};

export default App;
