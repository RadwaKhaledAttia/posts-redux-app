import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Grid } from '@mui/material'
import TableComponent from '../../components/table'
import { getPosts } from '../../redux/actions'

const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.getPosts.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Container>
      <Grid container>
        <TableComponent posts={posts} />
      </Grid>
    </Container>
  )
}

export default Posts
