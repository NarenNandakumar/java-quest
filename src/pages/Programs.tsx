
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import Programs from '@/components/home/Programs';

const ProgramsPage = () => {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Java Programming Courses",
    "description": "Expert Java programming instruction with charitable impact. Normal classes ($20/month) and one-on-one sessions ($35/month) available.",
    "provider": {
      "@type": "Organization",
      "name": "JavaQuest",
      "alternateName": "Java Quest"
    },
    "courseMode": "online",
    "educationalLevel": "beginner to advanced",
    "offers": [
      {
        "@type": "Offer",
        "price": "20",
        "priceCurrency": "USD",
        "name": "Normal Classes"
      },
      {
        "@type": "Offer", 
        "price": "35",
        "priceCurrency": "USD",
        "name": "One-on-One Sessions"
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Java Programming Courses - JavaQuest Programs | Java Quest Classes"
        description="Explore JavaQuest (Java Quest) programming courses. Normal classes $20/month, one-on-one sessions $35/month. Expert Java instruction with charitable impact. Enroll today!"
        structuredData={courseSchema}
      />
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-javaquest-blue mb-4">Our Java Programming Programs</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our expertly designed Java programming courses at JavaQuest (Java Quest) and help make a difference.
            </p>
          </div>
          <Programs />
        </div>
      </div>
    </Layout>
  );
};

export default ProgramsPage;
