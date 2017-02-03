import React from 'react'
import { observer } from 'mobx-react'

import errors from '../lib/errors'

const ErrorMessage = observer(({ error }) => {
  let errorMessage
  if (errors.isTimedOut(error)) {
    errorMessage = (
      <p>The request for builds timed out.</p>
    )
  } else if (errors.isNoConnection(error)) {
    errorMessage = (
      <p>There is no internet connection. The builds can be loaded once you connect to a network.</p>
    )
  } else {
    errorMessage = (
      <div>
        <p>An unexpected error occurred:</p>
        <pre className='alert alert-danger'>
          {error.message}
        </pre>
      </div>
    )
  }

  return (
    <div id='builds-list-page' className='builds-list-error'>
      <div className="empty">
        <h4>
          <i className='fa fa-warning red'></i>{' '}
          Builds Could Not Be Loaded
        </h4>
        {errorMessage}
      </div>
    </div>
  )
})

export default ErrorMessage
