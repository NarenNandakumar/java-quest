
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Impact = () => {
  const impactStats = [
    {
      number: '500+',
      label: 'Students Taught',
      description: 'Aspiring programmers from around the world.'
    },
    {
      number: '$50,000+',
      label: 'Donated',
      description: 'To charitable organizations globally.'
    },
    {
      number: '15+',
      label: 'Non-Profits Supported',
      description: 'Working on education, health, and more.'
    },
    {
      number: '30+',
      label: 'Countries Impacted',
      description: 'Through our donations and initiatives.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-javaquest-blue mb-4">Our Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            When you learn with JavaQuest, you're part of something bigger. Here's how our community is making a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <Card key={index} className="border-none shadow-lg text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-javaquest-orange">
                  {stat.number}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold text-javaquest-blue mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-javaquest-blue text-lg font-medium">
            Your tuition makes all of this possible. Learn Java, change lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
