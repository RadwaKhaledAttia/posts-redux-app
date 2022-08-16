import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Axios from 'axios'
import Router, { useRouter } from 'next/router'
import { Dialog, DialogTitle, DialogContent } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { API_ENDPOINT } from '../../utils/endpoint'
import { pathOr } from 'ramda'
import useStyles from './style'
import EditForm from './form'

const EditPost = ({ open, setOpen }) => {
  const classes = useStyles()
  const [post, setPost] = useState({})
  const { query } = useRouter()

  const getPost = id => {
    Axios.get(`${API_ENDPOINT}/${id}`).then(response => setPost(response.data))
  }
  useEffect(() => {
    if (query.id) getPost(query.id)
  }, [query.id])

  const closeModal = () => {
    Router.push('/')
    setOpen(false)
  }

  return (
    <div className={classes.postHolder}>
      <Head>
        <title>Edit Post</title>
        <meta name="description" content={pathOr('', ['title'], post)} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dialog
        className={classes.FlexModal}
        open={open}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="simple-dialog-title">
          <CloseIcon onClick={closeModal} />
          <h1>Edit Post</h1>
        </DialogTitle>
        <DialogContent>
          {post.id && <EditForm post={post} closeModal={closeModal} />}
          {!post.id && <h4>Loading ...</h4>}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default EditPost
