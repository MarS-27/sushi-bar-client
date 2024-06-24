import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { i18Config } from './i18n/config';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Outlet } from 'react-router-dom';

i18next.use(initReactI18next).init(i18Config);

const App = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <div className="flex min-h-dvh flex-col items-center bg-mainBg">
        <Header />
        <main className="mt-[65px] max-w-container flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </I18nextProvider>
  );
};

export default App;
