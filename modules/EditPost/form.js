import React from 'react'
import { useDispatch } from 'react-redux'
import { updatePost } from '../../redux/actions'
import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form'
import { useSnackbar } from 'notistack'
import Input from '../../components/input'
import useStyles from './style'
import { Button } from '@mui/material'

const EditForm = ({ post, closeModal }) => {
  const classes = useStyles()
  const { query } = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', defaultValues: post })

  const submitEdit = async (values) => {
    dispatch(updatePost({data: values, id: query.id}))
    enqueueSnackbar('Post updated successfully', { variant: 'success' })
    closeModal()
  }
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
        <Button id="cancel" onClick={closeModal}>
          Cancel
        </Button>
        <Button type="submit">Edit post</Button>
      </div>
    </form>
  )
}

export default EditForm
