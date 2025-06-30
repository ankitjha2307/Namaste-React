import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
// const err= useRouteError();
 

  return (
   <div className="error-container">
      <div className="error-code">404</div>
      <div className="error-message">Oops! Page not found.</div>
      <div className="error-description">
        The page you're looking for doesn't exist or has been moved.
      </div>
     
    </div>
  )
}

export default Error
