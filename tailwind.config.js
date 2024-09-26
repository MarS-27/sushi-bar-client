/** @type {import('tailwindcss').Config} */
import scrollbarPlugin from 'tailwind-scrollbar';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: { categoriesMenu: '90px', containerInner: 'calc(100% - 114px)' },
      height: {
        headerHeight: '65px',
        mobileMenu: 'calc(100dvh - 65px)',
      },
      maxHeight: { categoriesMenu: 'calc(100dvh - 120px)' },
      maxWidth: {
        container: '1400px',
        footerContainer: '1254px',
      },
      minWidth: { container: '320px' },
      fontFamily: {
        montserrat: ['Montserrat', 'serif'],
      },
      fontSize: {
        xs10: ['10px', '12px'],
        xs12: ['12px', '16px'],
        s14: ['14px', '20px'],
        s16: ['16px', '24px'],
        m20: ['20px', '28px'],
        m24: ['24px', '32px'],
        l28: ['28px', '36px'],
        l32: ['32px', '38px'],
      },
      backgroundColor: {
        mainBg: '#f5f5f5',
        white: '#fcfcfc',
        lightBlue: '#70bbfc',
        darkBlue: '#003d66',
        orange: '#ff7a00',
        yellow: '#fac817',
        red: '#fa0d0d',
        grayLight: '#9d9d9d',
        grayDark: '#5d5d5d',
        green: '#1f9a00',
      },
      colors: {
        black: '#231F20',
        white: '#fcfcfc',
        lightBlue: '#70bbfc',
        darkBlue: '#003d66',
        red: '#fa0d0d',
        grayLight: '#9d9d9d',
        grayDark: '#5d5d5d',
      },
      backgroundSize: {
        '0-100': '0% 100%',
        '100-100': '100% 100%',
      },
      transitionProperty: {
        navButton: 'background-size, color',
      },
    },
  },
  plugins: [scrollbarPlugin],
};
