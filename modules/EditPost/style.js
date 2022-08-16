import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  postHolder: {
    width: '100%',
    marginTop: 80,
    '& h1': {
      color: '#372166',
      marginBottom: 80,
      textAlign: 'center',
      width: '80%',
    },
    '& h4': {
      color: '#372166',
      margin: '50px 0',
      textAlign: 'center',
      fontSize: 22,
    },
    '& form': {
      width: '80%',
    },
  },
  FlexModal: {
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
  editBtns: {
    margin: '80px 0',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'space-around',
    '& .MuiButton-root': {
      background: '#54E7AF',
      color: '#372166',
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
