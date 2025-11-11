'use client'
import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import axios from 'axios'

interface BlogFormData {
  title: string
  body: string
}

const AddBlog = () => {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    body: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // console.log('Form submitted:', formData)
  try {

    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", formData)
    // console.log(response.data)
    alert(`Data submitted: ${JSON.stringify(response.data)}`)
  } catch (err) {
    console.error("Failed to submit:", err)
  }
    setFormData({ title: '', body: '' })
    setOpen(false)
  }

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <Plus size={18} />
          Add Blog
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create New Blog Post</DialogTitle>
          <DialogDescription>
            Add a new blog post by filling out the form below.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter blog title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="body">Body</Label>
              <Textarea
                id="body"
                name="body"
                placeholder="Write your blog content here..."
                value={formData.body}
                onChange={handleChange}
                rows={6}
                required
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              Create Blog
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddBlog