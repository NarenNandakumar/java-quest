
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import AboutPreview from '@/components/home/About';
import CodeAnimation from '@/components/home/CodeAnimation';
import Impact from '@/components/home/Impact';
import Contact from '@/components/home/Contact';
import Programs from '@/components/home/Programs';

const Index = () => {
  return (
    <Layout>
      <Hero />
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
