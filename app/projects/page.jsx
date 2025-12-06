import ProjectShowcase from '@/components/ProjectShowcase'

export default function Projects() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center">Our Clients</h1>
        <p className="text-lg text-gray-600 mt-2 mb-8 text-center">We have worked with</p>
        <ProjectShowcase />
      </div>
     </div>
  )
} 
