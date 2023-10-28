import React from 'react'
import UserPost from './UserPost'
import TokenPost from './TokenPost'
import PhotoPost from './PhotoPost'
import PhotoGet from './PhotoGet'

const Api = () => {
  return (
    <div>
      <h2>USER POST</h2>
      <UserPost />
      <h2>TOKEN POST</h2>
      <TokenPost />
      <h2>PHOTO POST</h2>
      <PhotoPost />
      <h2>PHOTO GET</h2>
      <PhotoGet />
    </div>
  )
}

export default Api