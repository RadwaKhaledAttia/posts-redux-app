import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  tableHolder: {
    width: '100%',
    '& th': {
        background: '#eef2f7',
    },
  },
  actionsHolder: {
    '& svg': {
      color: '#98a6ad',
      fontSize: '1.2rem',
      marginRight: 15,
      cursor: 'pointer',
    },
  },
}))

export default useStyles
