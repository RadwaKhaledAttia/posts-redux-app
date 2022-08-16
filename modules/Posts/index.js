import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import debounce from 'lodash.debounce'
import { Container, Grid, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import TableComponent from '../../components/table'
import { getPosts } from '../../redux/actions'
import useStyles from './style'

const Posts = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const posts = useSelector(state => state.getPosts.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  const handleChange = debounce(event => {
    dispatch(getPosts(event.target.value))
  }, 500)

  return (
   <div className={classes.postsHolder}>
     <Container>
      <Grid container direction={'rown'} justifyContent={'flex-end'}>
      <TextField
        id='outlined-basic'
        variant='outlined'
        FormHelperTextProps={{
          classes: {
            root: classes.helperText,
          },
        }}
        placeholder={'Search with title'}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
      />
      </Grid>
      <Grid container>
        <TableComponent posts={posts} />
      </Grid>
    </Container>
   </div>
  )
}

export default Posts
