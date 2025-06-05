import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectShowcase from '@/components/ProjectShowcase'
import BlogPreview from '@/components/BlogPreview'
import InquireForm from '@/components/InquireForm'

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectShowcase />
      <BlogPreview />
      <InquireForm />
    </div>
  )
} 