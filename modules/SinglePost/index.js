import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Axios from 'axios'
import { useRouter } from 'next/router'
import { Container, Grid } from '@mui/material'
import { API_ENDPOINT } from '../../utils/endpoint'
import { pathOr } from 'ramda'
import useStyles from './style'

const Posts = () => {
  const classes = useStyles()
  const [post, setPost] = useState({})
  const { query } = useRouter()
  console.log(query, post)

  const getPost = id => {
    Axios.get(`${API_ENDPOINT}/${id}`).then(response => setPost(response.data))
  }
  useEffect(() => {
    getPost(query.id)
  }, [query])
  return (
    <div className={classes.postHolder}>
      <Head>
        <title>Post App</title>
        <meta name="description" content={pathOr('', ['title'], post)} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Grid container spacing={4}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <h1>Post details</h1>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item lg={2} md={2} sm={3} xs={12}>
            <h3>Title:</h3>
          </Grid>
          <Grid item lg={10} md={10} sm={9} xs={12}>
            <h5>{pathOr('', ['title'], post)}</h5>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item lg={2} md={2} sm={3} xs={12}>
            <h3>Description:</h3>
          </Grid>
          <Grid item lg={10} md={10} sm={9} xs={12}>
            <h5>{pathOr('', ['body'], post)}</h5>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Posts
