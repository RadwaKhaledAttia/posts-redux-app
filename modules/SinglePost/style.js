import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  postHolder: {
    width: '100%',
    marginTop: 80,
    '& h1': {
      color: '#372166',
      marginBottom: 50,
    },
    '& h4': {
      color: '#372166',
      margin: '50px 0',
      textAlign: 'center',
      fontSize: 22,
    },
    '& h3': {
      color: '#344054',
      marginTop: 0,
    },
    '& h5': {
      fontSize: 18,
      lineHeight: '28px',
      marginTop: 0,
    },
  },
 
}))

export default useStyles
