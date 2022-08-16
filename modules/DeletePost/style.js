import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  FlexDeleteModal: {
    '& svg': {
      position: 'absolute',
      top: 35,
      right: 35,
      fontSize: 50,
      color: '#DF0B2F',
      cursor: 'pointer',
    },
    '& .MuiDialogTitle-root': {
      paddingTop: 27,
      textAlign: 'center',
      marginBottom: 15,
      color: '#372166',
      fontSize: 22,
    },
    '& .MuiDialog-paper': {
      minWidth: 650,
    },
    '@media(max-width: 280px)': {
      '& svg': {
        top: 15,
        right: 15,
        fontSize: 35,
      },
      '& .MuiDialogTitle-root': {
        '& h2': {
          fontSize: '28px !important',
        },
      },
    },
  },
  deleteBtns: {
    margin: '40px 0',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'space-around',
    '& .MuiButton-root': {
      background: '#DF0B2F',
      color: '#FFFFFF',
      transition: 'all 0.3s ease 0s',
      textTransform: 'capitalize',
      margin: '10px 0',
      border: 0,
      cursor: 'pointer',
      borderRadius: 8,
      minWidth: 200,
      height: 50,
      fontSize: '20px',
    },
    '& button#cancel': {
      color: '#344054',
      background: '#C2D1D9',
    },
  },
}))

export default useStyles
