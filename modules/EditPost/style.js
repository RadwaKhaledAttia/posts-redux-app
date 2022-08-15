import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  postHolder: {
    width: '100%',
    marginTop: 80,
    '& h1': {
      color: '#372166',
      marginBottom: 80,
      textAlign: 'center',
      width: '80%'
    },
    '& h4': {
      color: '#372166',
      margin: '50px 0',
      textAlign: 'center',
      fontSize: 22,
    },
    '& form': {
      width: '80%'
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
      border:0,
      cursor: 'pointer',
      borderRadius: 8,
      minWidth: 200,
      height: 50,
      fontSize: '20px',
    },
    '& button#cancel': {
      color: '#344054',
      background: '#C2D1D9'
    },
  },
}))

export default useStyles
