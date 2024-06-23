import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { i18Config } from './i18n/config';

i18next.use(initReactI18next).init(i18Config);

const App = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <div className="text-4xl text-red-700">Hello!</div>
    </I18nextProvider>
  );
};

export default App;
