import React from 'react'
import axios from 'axios'
import BlogMapClient from './BlogCard'

const API_URL = "https://jsonplaceholder.typicode.com/photos"

interface Photo {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}


async function getServerSideProps() {
  try {
    const response = await axios.get<Photo[]>(API_URL, {
      headers: {
        'Cache-Control': 'no-cache',
      }
    })
    
    return {
      props: {
        data: response.data,
        error: null
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: {
        data: [],
        error: 'Failed to fetch photos'
      }
    }
  }
}

const BlogMap = async () => {
  const { props } = await getServerSideProps()
  const { data, error } = props

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">No photos found</div>
      </div>
    )
  }

  return <BlogMapClient initialData={data} />
}

export default BlogMap