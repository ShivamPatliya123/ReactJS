import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/config'


function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>

      <div className='w-full bg-gray-200 rounded-xl p-4'>
        <div className='w-full mb-4 justify-center'>
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
            className='rounded-xl'
          />
        </div>
        <h2
          className='font-bold text-xl'
        >{title}</h2>
      </div>

    </Link>
  )
}

export default PostCard