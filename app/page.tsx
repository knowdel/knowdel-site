import Hero from '@/components/Hero'
import NewsSection from '@/components/NewsSection'
import WorkSection from '@/components/WorkSection'
import CompanySection from '@/components/CompanySection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <div>
      <Hero />
      <NewsSection />
      <WorkSection />
      <CompanySection />
      <ContactSection />
    </div>
  )
}
