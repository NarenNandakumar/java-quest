
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      title: 'Expert Instruction',
      description: 'Learn from experienced Java developers who are passionate about teaching and mentoring.',
      icon: '👨‍🏫'
    },
    {
      title: 'Real-World Projects',
      description: 'Apply your knowledge to build practical applications that solve actual problems.',
      icon: '💻'
    },
    {
      title: 'Supportive Community',
      description: 'Join a community of learners who share your passion for coding and making a difference.',
      icon: '👥'
    },
    {
      title: 'Global Impact',
      description: 'Your tuition directly funds non-profit organizations working on critical global challenges.',
      icon: '🌍'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose JavaQuest?</h2>
            <p className="text-muted-foreground">
              Our unique approach combines quality programming education with meaningful social impact.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-javaquest-blue">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
