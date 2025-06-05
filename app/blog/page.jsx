import BlogPreview from '@/components/BlogPreview'

export default function Blog() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Blog</h1>
        <BlogPreview />
      </div>
    </div>
  )
} 