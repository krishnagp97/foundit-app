import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ post }) {
  const formattedDate = new Date(post.$createdAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })

  return (
    <Link to={`/post/${post.$id}`}>
      <div className="
        w-full 
        bg-gray-100 
        rounded-xl 
        p-3 sm:p-4 
        shadow-sm 
        hover:shadow-md 
        transition-shadow 
        duration-200
      ">

        
        <div className="
          w-full 
          h-40 sm:h-48 md:h-56 
          mb-3 sm:mb-4 
          overflow-hidden 
          rounded-xl
        ">
          <img
            src={appwriteService.getFileView(post.featuredImage)}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
          <h2 className="
            text-base sm:text-lg md:text-xl 
            font-bold 
            line-clamp-2
          ">
            {post.title}
          </h2>

          <time
            className="
              text-[10px] sm:text-xs 
              text-gray-500 
              whitespace-nowrap
            "
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
