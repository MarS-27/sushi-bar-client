/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {},
      height: { headerHeight: '65px' },
      maxHeight: {},
      maxWidth: {
        container: '1280px',
      },
      minWidth: { container: '320px' },
      fontSize: {
        xs10: ['10px', '12px'],
        xs12: ['12px', '16px'],
        s14: ['14px', '20px'],
        s16: ['16px', '24px'],
        m20: ['20px', '28px'],
        m24: ['24px', '32px'],
        l28: ['29px', '36px'],
        l32: ['32px', '38px'],
      },
      backgroundColor: {
        mainBg: '#f5f5f5',
        white: '#fcfcfc',
        lightBlue: '#70bbfc',
        darkBlue: '#004b7c',
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
        darkBlue: '#004b7c',
        red: '#fa0d0d',
        grayLight: '#9d9d9d',
        grayDark: '#5d5d5d',
      },
    },
  },
  plugins: [],
};
