import Image from 'next/image'
import Link from 'next/link'

export default function BlogPreview() {
  const blogPosts = [
    {
      title: 'The Future of Indian Real Estate: Challenges, Reforms, and the Road to a $1 Trillion Market',
      excerpt: 'India\'s real estate sector is booming but fragmented. Discover what\'s driving its growth, what challenges persist, and how innovation and regulation are reshaping the landscape.',
      image: '/images/blog4.png',
      date: 'December 6, 2025',
      category: 'Market Analysis',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post, index) => (
        <article key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>
            </div>
          </div>
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-2">{post.date}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              <Link href="/blog/indian-real-estate-2025" className="hover:text-blue-600 transition-colors">
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link
              href="/blog/indian-real-estate-2025"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
} 