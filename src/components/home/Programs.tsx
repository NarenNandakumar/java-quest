
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    {
      title: 'Java Fundamentals',
      description: 'A comprehensive introduction to Java programming for absolute beginners.',
      duration: '8 Weeks',
      level: 'Beginner',
      price: '$299'
    },
    {
      title: 'Advanced Java',
      description: 'Deepen your Java knowledge with advanced concepts and techniques.',
      duration: '10 Weeks',
      level: 'Intermediate',
      price: '$399'
    },
    {
      title: 'Java for Enterprise',
      description: 'Master enterprise-level Java development with Spring Boot and more.',
      duration: '12 Weeks',
      level: 'Advanced',
      price: '$499'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-javaquest-blue mb-4">Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our range of expertly designed courses to begin your Java programming journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <span className="text-gray-600">Level:</span>
                    <span className="font-medium">{program.level}</span>
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
