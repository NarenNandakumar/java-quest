
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    {
      title: 'Normal Class',
      description: 'Learn Java programming in a group setting with our experienced instructors.',
      duration: '2 Months',
      format: 'Group Classes',
      price: '$15/month'
    },
    {
      title: 'One-on-One Sessions',
      description: 'Personalized Java programming instruction tailored to your specific needs and pace.',
      duration: '2 Months',
      format: 'Individual Sessions',
      price: '$15/month'
    }
  ];

  return (
    <section className="py-20 bg-white" id="programs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-javaquest-blue mb-4">Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our expertly designed Java programming courses and help make a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {programs.map((program, index) => (
            <Card key={index} className="border border-gray-200 hover:border-javaquest-teal transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-javaquest-blue">{program.title}</CardTitle>
                <CardDescription className="text-gray-600">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">{program.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-bold text-javaquest-blue">{program.price}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-javaquest-teal hover:bg-javaquest-teal/90">
                  <Link to="/#contact">Enroll Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
