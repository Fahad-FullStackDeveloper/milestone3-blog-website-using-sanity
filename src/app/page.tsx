import React from 'react'
import AllBlogPosts from './AllBlogPosts/page'
import RecentBlogPosts from './RecentBlogPosts/page'

export default function Home() {
  return (
    <div>
      <RecentBlogPosts />
      <AllBlogPosts />
    </div>
  )
}
