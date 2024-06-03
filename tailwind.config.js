/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors : {
        purple : "#482BE7",
        purpleDarker : "#4127d0",
        dimPurple : "#1E0E62",
        gray : "#a4a4b3",
        grayDarker : "#a0a0b0",
        border : "#ebeaed",
        green : "#25DAC5",
        greenDarker : "#21c4b1",
        blue : "#1DA1F2",
        blueDarker : "#1a91da",
        pink : "#E93A7D",
        background : "#2f1992",
      },
      fontWeight: {
        ultralight: '100',
        light: '200',
        regular: '300',
        medium: '400',
        semibold: '500',
        bold: '600',
        extrabold: '700',
        black: '800',
        heavy: '900',
    },
    }
  },
  plugins: []
}
