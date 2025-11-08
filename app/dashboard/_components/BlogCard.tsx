'use client'
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Photo {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

interface BlogMapClientProps {
  initialData: Photo[]
}

const BlogMapClient = ({ initialData }: BlogMapClientProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 9

  // Calculate pagination
  const totalPages = Math.ceil(initialData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = initialData.slice(startIndex, endIndex)

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {currentData.map((photo) => (
          <Card key={photo.id} className="w-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Photo #{photo.id}</CardTitle>
              <CardDescription>Album ID: {photo.albumId}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 rounded-md overflow-hidden">
                <Image 
                  src={'https://picsum.photos/150'} 
                  alt={photo.title}
                  width={150} 
                  height={150}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </div>
              <div className="font-medium mb-2">Title:</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2">
                {photo.title}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-4 pb-6">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={16} />
          Previous
        </Button>
        
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        
        <Button
          variant="outline"
          size="sm"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  )
}

export default BlogMapClient