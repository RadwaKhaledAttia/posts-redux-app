import React from 'react'
import Router from 'next/router'
import Axios from 'axios'
import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form'
import { useSnackbar } from 'notistack'
import Input from '../../components/input'
import { API_ENDPOINT } from '../../utils/endpoint'
import useStyles from './style'
import { Button } from '@mui/material'

const EditForm = ({ post }) => {
  const classes = useStyles()
  const { query } = useRouter()
  const { enqueueSnackbar } = useSnackbar()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', defaultValues: post })

  const submitEdit = values => {
    Axios({
      method: 'put',
      url: `${API_ENDPOINT}/${query.id}`,
      data: {
        ...values,
      },
    }).then(() => {
        enqueueSnackbar('Post updated successfully', { variant: 'success' })
        Router.push('/')
    })
  }
  const Cancel = () => Router.push('/')
  return (
    <form onSubmit={handleSubmit(submitEdit)}>
      <Controller
        name={'title'}
        control={control}
        render={({ field }) => (
          <Input
            id="title"
            label={'Title:'}
            placeholder="Enter post title"
            {...register('title', {
              required: 'Enter post title',
            })}
            error={errors?.title}
            {...field}
          />
        )}
      />
      <Controller
        name={'body'}
        control={control}
        render={({ field }) => (
          <Input
            id="body"
            multiline={true}
            label={'Description:'}
            placeholder="Enter post description"
            {...register('body', {
              required: 'Enter post description',
            })}
            error={errors?.body}
            {...field}
          />
        )}
      />
      <div className={classes.editBtns}>
        <Button id="cancel" onClick={Cancel}>
          Cancel
        </Button>
        <Button type="submit">Edit post</Button>
      </div>
    </form>
  )
}

export default EditForm
