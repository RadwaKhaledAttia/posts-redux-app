import React from 'react'
import Head from 'next/head'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../redux/actions'
import Router, { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { Button } from '@mui/material'
import { Dialog, DialogTitle, DialogContent } from '@mui/material'
import useStyles from './style'

const DeletePost = ({ open, setOpen }) => {
  const classes = useStyles()
  const { query } = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()

  const closeModal = () => {
    Router.push('/')
    setOpen(false)
  }

  const submitDelete = async () => {
    dispatch(deletePost({ id: query.id }))
    enqueueSnackbar('Post deleted successfully', { variant: 'success' })
    closeModal()
  }

  return (
    <div className={classes.postHolder}>
      <Head>
        <title>Delete Post</title>
        <meta name="description" content="delete post" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dialog
        className={classes.FlexDeleteModal}
        open={open}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="simple-dialog-title">
          <h5>Are you sure that you want to delete this post?</h5>
        </DialogTitle>
        <DialogContent>
          <div className={classes.deleteBtns}>
            <Button id="cancel" onClick={closeModal}>
              Cancel
            </Button>
            <Button onClick={submitDelete}>Delete post</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DeletePost
