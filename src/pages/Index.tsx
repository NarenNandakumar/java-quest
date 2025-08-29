
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import AboutPreview from '@/components/home/About';
import CodeAnimation from '@/components/home/CodeAnimation';
import Impact from '@/components/home/Impact';
import Contact from '@/components/home/Contact';
import Programs from '@/components/home/Programs';
import APSuccessSection from '@/components/home/APSuccessSection';

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JavaQuest",
    "alternateName": "Java Quest",
    "description": "Teaching Java programming while making a difference in the world",
    "url": "https://javaquest.lovable.app",
    "logo": "https://javaquest.lovable.app/favicon.ico",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-214-536-5483",
      "contactType": "enrollment"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "JavaQuest",
    "alternateName": "Java Quest",
    "url": "https://javaquest.lovable.app"
  };

  return (
    <Layout>
      <SEO 
        title="JavaQuest - Learn Java Programming | Java Quest Coding Classes"
        description="Master Java programming with JavaQuest (Java Quest). Expert instruction, charitable impact, free trial class. Join our coding community and change lives while learning to code."
        structuredData={[organizationSchema, websiteSchema]}
      />
      <Hero />
      <APSuccessSection />
      <Features />
      <AboutPreview />
      <Programs />
      <CodeAnimation />
      <Impact />
      <Contact />
    </Layout>
  );
};

export default Index;
