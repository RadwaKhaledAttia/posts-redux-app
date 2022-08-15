/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'
import Input from '@mui/material/Input'
import useStyles from './style'

const InputComponent = forwardRef(({ ref, label, id, ...props }) => {
  const classes = useStyles()
  return (
    <div ref={ref} className={classes.inputWrapper}>
      {label && (
        <label htmlFor={id} className={classes.label}>
          {label}
        </label>
      )}
      <div>
        <Input disableUnderline fullWidth {...props} />
        {props.error && <p className='error'>{props.error.message}</p>}
      </div>
    </div>
  )
})

export default InputComponent
