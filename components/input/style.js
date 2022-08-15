import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    '& .error': {
      marginTop: 0,
      marginBottom: 20,
      color: '#d44747',
    },
    '& .Mui-error': {
      '& input': {
        border: "1px solid rgba(208, 213, 221, 1)",
        borderRadius: 4,
      }
    },
    '& .Mui-error:after': {
      border: 0,
    },
    '& :hover:not(.Mui-disabled):before': {
      border: 0,
    },
    '& :before': {
      border: 0,
    },
    '& :after': {
      border: 0,
    },
    '& .MuiInput-underline': {
      display: 'none',
    },
    '& .MuiInput-root': {
      '& input': {
        height: 14,
        border: "1px solid rgba(208, 213, 221, 1)",
        background: '#F8F8F8',
        padding: '15px 8px',
        float: 'left',
      },
      '& textArea': {
        height: 14,
        border: "1px solid rgba(208, 213, 221, 1)",
        background: '#F8F8F8',
        padding: '15px 8px',
        float: 'left',
      },
      width: '97%',
      height: 40,
      marginTop: 5,
      fontFamily: 'Roboto',
      color: '#000',
      display: 'block',
      textIndent: 20,
      fontSize: 16,
      outline: 'none',
      '@media (max-width: 1024px)': {
        textIndent: 10
      },
      '@media (max-width: 414px)': {
        fontSize: 14
      },
      '@media (max-width: 320px)': {
        fontSize: 12
      },
      '&:focus': {
        borderColor: "#F1992F",
      },
      "&::placeholder": {
        color: "#C6C6C6",
        fontSize: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: "Capitalize",
        '@media (max-width: 769px)': {
          fontSize: 15
        },
        '@media (max-width: 414px)': {
          fontSize: 14
        },
        '@media (max-width: 320px)': {
          fontSize: 12
        },
      },
      "&::-ms-input-placeholder": {
        color: "#C6C6C6",
        fontSize: 16,
        textTransform: "Capitalize",
        '@media (max-width: 414px)': {
          fontSize: 14
        },
      },
      "&:-ms-input-placeholder": {
        color: "#C6C6C6",
        fontSize: 16,
        textTransform: "Capitalize",
        '@media (max-width: 414px)': {
          fontSize: 14
        },
      },
    },
  },

  label: {
    fontSize: '16px',
    marginBottom: '6px',
    marginTop: '10px',
    '@media(max-width: 330px)': {
      fontSize: '13px !important'
    }
  },
}))

export default useStyles
