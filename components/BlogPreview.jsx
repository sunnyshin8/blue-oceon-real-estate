import Image from 'next/image'
import Link from 'next/link'

export default function BlogPreview() {
  const blogPosts = [
    {
      title: 'Top 10 Home Buying Tips for First-Time Buyers',
      excerpt: 'Learn the essential tips and tricks for first-time home buyers to make the process smoother and more successful.',
      image: '/images/blog1.jpg',
      date: 'March 15, 2024',
      category: 'Buying Guide',
    },
    {
      title: 'Real Estate Market Trends for 2024',
      excerpt: 'Stay informed about the latest trends and predictions in the real estate market for the coming year.',
      image: '/images/blog2.jpg',
      date: 'March 10, 2024',
      category: 'Market Analysis',
    },
    {
      title: 'How to Stage Your Home for a Quick Sale',
      excerpt: 'Discover professional tips on how to stage your home effectively to attract potential buyers and close deals faster.',
      image: '/images/blog3.jpg',
      date: 'March 5, 2024',
      category: 'Selling Tips',
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
              <Link href={`/blog/${index + 1}`} className="hover:text-blue-600 transition-colors">
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link
              href={`/blog/${index + 1}`}
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