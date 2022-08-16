import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  postsHolder: {
    width: '100%',
    marginTop: 80,
    '& .MuiTextField-root': {
      marginBottom: 30,
      width: '30%',
    },
  },
}))

export default useStyles
