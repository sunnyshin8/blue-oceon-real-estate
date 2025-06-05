import Image from 'next/image'

export default function ProjectShowcase() {
  const projects = [
    {
      title: 'Luxury Villa',
      location: 'Beverly Hills, CA',
      price: '$2,500,000',
      image: '/images/project1.jpg',
      features: ['5 Beds', '4 Baths', '3,500 sqft'],
    },
    {
      title: 'Modern Apartment',
      location: 'Downtown, NY',
      price: '$850,000',
      image: '/images/project2.jpg',
      features: ['2 Beds', '2 Baths', '1,200 sqft'],
    },
    {
      title: 'Family Home',
      location: 'Suburban Area, TX',
      price: '$1,200,000',
      image: '/images/project3.jpg',
      features: ['4 Beds', '3 Baths', '2,800 sqft'],
    },
    {
      title: 'Beach House',
      location: 'Miami Beach, FL',
      price: '$3,500,000',
      image: '/images/project4.jpg',
      features: ['6 Beds', '5 Baths', '4,200 sqft'],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="relative h-64">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-2">{project.location}</p>
            <p className="text-blue-600 font-semibold text-lg mb-4">{project.price}</p>
            <div className="flex flex-wrap gap-2">
              {project.features.map((feature, featureIndex) => (
                <span
                  key={featureIndex}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 