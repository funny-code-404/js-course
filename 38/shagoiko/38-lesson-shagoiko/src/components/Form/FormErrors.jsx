import React from 'react'

export const FormErrors = ({ formErrors }) =>
  Object.keys(formErrors).map((fieldName, i) => {
    if (formErrors[fieldName].length > 0) {
      return (
        <p key={i}>
          {'field '}
          {fieldName} {formErrors[fieldName]}
        </p>
      )
    } else {
      return ''
    }
  })
