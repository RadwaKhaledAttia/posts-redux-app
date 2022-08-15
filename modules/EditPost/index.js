import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Axios from 'axios'
import { useRouter } from 'next/router'
import { Container, Grid } from '@mui/material'
import { API_ENDPOINT } from '../../utils/endpoint'
import { pathOr } from 'ramda'
import useStyles from './style'
import EditForm from './form'

const EditPost = () => {
  const classes = useStyles()
  const [post, setPost] = useState({})
  const { query } = useRouter()

  const getPost = id => {
    Axios.get(`${API_ENDPOINT}/${id}`).then(response => setPost(response.data))
  }
  useEffect(() => {
    getPost(query.id)
  }, [query])


  return (
    <div className={classes.postHolder}>
      <Head>
        <title>Edit Post</title>
        <meta name="description" content={pathOr('', ['title'], post)} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {post.id && (
        <Container>
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <h1>Edit Post</h1>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
           <EditForm post={post} />
          </Grid>
        </Container>
      )}
      {!post.id && <h4>Loading ...</h4>}
    </div>
  )
}

export default EditPost
