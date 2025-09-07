
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: 'Normal Class',
      description: 'Learn Java programming in a group setting with our experienced instructors.',
      duration: 'Oct 2025 - May 2026',
      schedule: 'Every Saturday, 5:00 PM EST',
      format: 'Group Classes',
      price: '$20/month'
    },
    {
      title: 'One-on-One Sessions',
      description: 'Personalized Java programming instruction tailored to your specific needs and pace.',
      duration: 'Oct 2025 - May 2026',
      schedule: 'Every Sunday, 5:00 PM EST',
      format: 'Individual Sessions',
      price: '$35/month'
    }
  ];

  const enrollmentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdDVqZBOuSZVfkB5-4AqqAWDni1vjAIHMETCuAXKfnPaD0XFA/viewform?usp=sharing&ouid=111291158362256036501";
  const freeTrialFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSelVTTihDsBB3BQkvXYQwAsNxDGEwOBv1kEw7wjzNwQoHK0vg/viewform?usp=sharing&ouid=111291158362256036501";

  return (
    <section className="py-20 bg-white" id="programs">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card key={index} className="border border-primary/20 hover:border-primary transition-colors shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{program.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Schedule:</span>
                    <span className="font-medium">{program.schedule}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">{program.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-bold text-primary">{program.price}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90"
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
          <Card className="border-2 border-accent hover:border-accent/80 transition-colors shadow-lg bg-accent/5">
            <CardHeader>
              <CardTitle className="text-xl text-accent">Free Trial Class</CardTitle>
              <CardDescription className="text-muted-foreground">Experience our teaching style and curriculum before committing to a full program.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">October 4th</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">5:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Format:</span>
                  <span className="font-medium">Group Session</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-bold text-accent text-lg">Free</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
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
