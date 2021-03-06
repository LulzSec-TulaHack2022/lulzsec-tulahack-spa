import { createTheme, ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    veronika: true
  }
}
export const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: '#407B13',
    },
    secondary: {
      main: '#F24E1E',
    },
    background: {
      default: '#51355A',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'veronika' },
          style: {
            background: 'linear-gradient(90deg, #407B13 0%, #6FE118 116.21%)',
            border: 0,
            borderRadius: '28px',
            boxShadow: 'none',
            color: 'white',
            fontWeight: 700,
            //            height: 48,
            textTransform: 'none',
            //            padding: '0 30px',
            padding: '12px',
            //            fontSize: '1.2rem',
          },
        },
        {
          props: { variant: 'veronika', size: 'small' },
          style: {
            padding: '4px 8px',
            fontSize: '1rem',
          },
        },
        {
          props: { variant: 'veronika', color: 'secondary' },
          style: {
            background: '#F24E1E',
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})
