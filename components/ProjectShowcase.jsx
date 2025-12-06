import Image from 'next/image'

export default function ProjectShowcase() {
  const projectImages = [
    '/images/projects/tcs-logo.svg',
    '/images/projects/agro-phos.svg',
    '/images/projects/maira-lake-resort.svg',
    '/images/projects/golds-gym.svg',
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {projectImages.map((src, index) => (
        <div
          key={index}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex items-center justify-center p-8"
        >
          <div className="relative w-full h-40">
            <Image
              src={src}
              alt="Project partner logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index === 0}
            />
          </div>
        </div>
      ))}
    </div>
  )
}