
import Layout from '@/components/layout/Layout';
import Programs from '@/components/home/Programs';

const ProgramsPage = () => {
  return (
    <Layout>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-javaquest-blue mb-4">Our Programs</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our expertly designed Java programming courses and help make a difference.
            </p>
          </div>
          <Programs />
        </div>
      </div>
    </Layout>
  );
};

export default ProgramsPage;
