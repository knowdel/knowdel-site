import Hero from '@/components/Hero'
import NewsSection from '@/components/NewsSection'
import MediaSection from '@/components/MediaSection'
import WorkSection from '@/components/WorkSection'
import CompanySection from '@/components/CompanySection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <div>
      <Hero />
      <NewsSection />
      <MediaSection />
      <WorkSection />
      <CompanySection />
      <ContactSection />
    </div>
  )
}
