
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

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

  const enrollmentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdDVqZBOuSZVfkB5-4AqqAWDni1vjAIHMETCuAXKfnPaD0XFA/viewform?usp=sharing&ouid=111291158362256036501";
  const freeTrialFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSelVTTihDsBB3BQkvXYQwAsNxDGEwOBv1kEw7wjzNwQoHK0vg/viewform?usp=sharing&ouid=111291158362256036501";

  return (
    <section className="py-20 bg-white" id="programs">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                <Button
                  asChild
                  className="w-full bg-javaquest-teal hover:bg-javaquest-teal/90"
                >
                  <a 
                    href={enrollmentFormUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Enroll Now <ExternalLink className="ml-1" size={16} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
          
          {/* Free Trial Class Card */}
          <Card className="border border-gray-200 hover:border-javaquest-orange transition-colors">
            <CardHeader>
              <CardTitle className="text-xl text-javaquest-orange">Free Trial Class</CardTitle>
              <CardDescription className="text-gray-600">Experience our teaching style and curriculum before committing to a full program.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">1 Session</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Format:</span>
                  <span className="font-medium">Group Session</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-bold text-javaquest-orange">Free</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                className="w-full bg-javaquest-orange hover:bg-javaquest-orange/90"
              >
                <a 
                  href={freeTrialFormUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Register Interest <ExternalLink className="ml-1" size={16} />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Programs;
