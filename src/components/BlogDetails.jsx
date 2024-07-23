import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[50px]'>
      <NavLink to={`/blog/${post.id}`} >
        <span className='font-bold text-xl'>{post.title}</span>
      </NavLink>
      <p>
        By
        <span className='italic '>{post.author}</span>
        {" "} on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span>{post.category}</span>
        </NavLink>
      </p>
      <p className='underline text-lg'> Posted on {post.date} </p>
      <p className='text-xl'> {post.content}</p>
      <div>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className='text-blue-500'>{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
