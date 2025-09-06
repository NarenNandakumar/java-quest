
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Impact = () => {
  const nonProfitCategories = [
    {
      icon: '🎓',
      title: 'Education',
      description: 'Supporting access to quality education for underprivileged children worldwide.'
    },
    {
      icon: '🌍',
      title: 'Environment',
      description: 'Funding conservation efforts and sustainable development initiatives.'
    },
    {
      icon: '🏥',
      title: 'Healthcare',
      description: 'Improving access to essential medical services in underserved communities.'
    },
    {
      icon: '🏠',
      title: 'Housing',
      description: 'Building safe and affordable housing for families in need.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-javaquest-blue mb-4">100% For Good</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every dollar you spend on JavaQuest courses goes directly to nonprofits making the world a better place.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {nonProfitCategories.map((category, index) => (
            <Card key={index} className="border-none shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="text-4xl mx-auto mb-2">
                  {category.icon}
                </div>
                <CardTitle className="text-javaquest-blue">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-javaquest-orange mb-4">Our Commitment</h3>
          <p className="text-gray-600 mb-6">
            Unlike traditional educational platforms that prioritize profit, JavaQuest operates with complete transparency. 
            We're committed to directing 100% of our revenue to carefully vetted nonprofit organizations that create 
            meaningful change in the world.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white shadow-lg">
            <Link to="/about">Learn About Our Impact</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Impact;
