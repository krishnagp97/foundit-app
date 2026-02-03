import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ post }) {
  const formattedDate = new Date(post.$createdAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Link to={`/post/${post.$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200'>

        <div className='w-full h-48 mb-4 overflow-hidden rounded-xl'>
          <img
            src={appwriteService.getFileView(post.featuredImage)}
            alt={post.title}
            className='w-full h-full object-cover'
          />
        </div>


        <div className='flex justify-between items-center'>
          <h2 className='text-xl font-bold'>{post.title}</h2>

          <time
            className='text-xs text-gray-500'
            dateTime={post.$createdAt} 
          >
            {formattedDate}
          </time>
        </div>

      </div>
    </Link>
  )
}

export default PostCard
