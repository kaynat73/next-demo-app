import React from 'react'
import Link from 'next/link'
const notFoundPage = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>page not found kindly go to the right page </p>
    <Link href="/">Return home</Link>
    </div>
  )
}

export default notFoundPage
