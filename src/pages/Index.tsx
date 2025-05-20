
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import AboutPreview from '@/components/home/About';
import Programs from '@/components/home/Programs';
import CodeAnimation from '@/components/home/CodeAnimation';
import Impact from '@/components/home/Impact';
import Contact from '@/components/home/Contact';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <AboutPreview />
      <CodeAnimation />
      <Programs />
      <Impact />
      <Contact />
    </Layout>
  );
};

export default Index;
