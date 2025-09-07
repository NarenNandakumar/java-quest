
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar } from 'lucide-react';

const ClassDetails = () => {
  const enrollmentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdDVqZBOuSZVfkB5-4AqqAWDni1vjAIHMETCuAXKfnPaD0XFA/viewform?usp=sharing&ouid=111291158362256036501";
  const freeTrialFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSelVTTihDsBB3BQkvXYQwAsNxDGEwOBv1kEw7wjzNwQoHK0vg/viewform?usp=sharing&ouid=111291158362256036501";
  
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    "name": "JavaQuest Free Trial Class",
    "description": "Free Java programming trial class by JavaQuest (Java Quest). Try our teaching style and curriculum with no commitment required.",
    "startDate": "2024-10-04T17:00:00-05:00",
    "organizer": {
      "@type": "Organization",
      "name": "JavaQuest",
      "alternateName": "Java Quest"
    },
    "location": {
      "@type": "VirtualLocation",
      "url": "https://zoom.us"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode"
  };

  return (
    <Layout>
      <SEO 
        title="Java Class Details & Schedule - JavaQuest | Java Quest Programming"
        description="View JavaQuest (Java Quest) class details. Regular sessions $20/month Saturdays, one-on-one $35/month Sundays, free trial October 4th. Expert Java instruction."
        structuredData={eventSchema}
      />
      {/* Hero section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Java Class Details & Schedule</h1>
            <p className="text-xl text-white/90">
              Information about our JavaQuest (Java Quest) class schedules and formats
            </p>
          </div>
        </div>
      </section>
      
      {/* Class details section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Regular Sessions Card */}
            <Card className="border-2 border-primary/20 shadow-xl overflow-hidden flex flex-col bg-gradient-to-br from-background to-secondary/5 hover:shadow-2xl transition-all duration-300">
              <div className="bg-primary/10 p-4 border-b border-primary/20">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary mb-2 mx-auto">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary text-center">Regular Sessions</h3>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="space-y-4 mt-4 flex-grow">
                  <div className="bg-secondary/20 rounded-lg p-3 border-l-4 border-primary">
                    <p className="text-foreground"><strong>Duration:</strong> October 11th - End of May</p>
                  </div>
                  <div className="bg-secondary/20 rounded-lg p-3 border-l-4 border-primary">
                    <p className="text-foreground"><strong>Day:</strong> Every Saturday</p>
                  </div>
                  <div className="bg-secondary/20 rounded-lg p-3 border-l-4 border-primary">
                    <p className="text-foreground"><strong>Time:</strong> 5:00 PM EST</p>
                  </div>
                  <div className="bg-secondary/20 rounded-lg p-3 border-l-4 border-primary">
                    <p className="text-foreground"><strong>Format:</strong> Group class via Zoom</p>
                  </div>
                  <div className="bg-secondary/20 rounded-lg p-3 border-l-4 border-primary">
                    <p className="text-foreground"><strong>Note:</strong> Holidays excluded</p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3 border-2 border-accent">
                    <p className="text-foreground"><strong>Price:</strong> <span className="font-bold text-primary text-lg">$20/month</span></p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 shadow-lg"
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
                </div>
              </CardContent>
            </Card>
            
            {/* One-on-One Sessions Card */}
            <Card className="border-2 border-secondary/30 shadow-xl overflow-hidden flex flex-col bg-gradient-to-br from-background to-secondary/10 hover:shadow-2xl transition-all duration-300">
              <div className="bg-secondary/20 p-4 border-b border-secondary/30">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary mb-2 mx-auto">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary text-center">One-on-One Sessions</h3>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="space-y-4 mt-4 flex-grow">
                  <div className="bg-secondary/15 rounded-lg p-3 border-l-4 border-secondary">
                    <p className="text-foreground"><strong>Duration:</strong> October 11th - End of May</p>
                  </div>
                  <div className="bg-secondary/15 rounded-lg p-3 border-l-4 border-secondary">
                    <p className="text-foreground"><strong>Day:</strong> Every Sunday</p>
                  </div>
                  <div className="bg-secondary/15 rounded-lg p-3 border-l-4 border-secondary">
                    <p className="text-foreground"><strong>Time:</strong> 5:00 PM EST</p>
                  </div>
                  <div className="bg-secondary/15 rounded-lg p-3 border-l-4 border-secondary">
                    <p className="text-foreground"><strong>Format:</strong> Individual session via Zoom</p>
                  </div>
                  <div className="bg-secondary/15 rounded-lg p-3 border-l-4 border-secondary">
                    <p className="text-foreground"><strong>Note:</strong> Holidays excluded</p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3 border-2 border-accent">
                    <p className="text-foreground"><strong>Price:</strong> <span className="font-bold text-secondary text-lg">$35/month</span></p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 shadow-lg"
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
                </div>
              </CardContent>
            </Card>
            
            {/* Free Trial Class Card */}
            <Card className="border-2 border-accent/30 shadow-xl overflow-hidden flex flex-col bg-gradient-to-br from-background to-accent/5 hover:shadow-2xl transition-all duration-300">
              <div className="bg-accent/15 p-4 border-b border-accent/30">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent mb-2 mx-auto">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-accent text-center">Free Trial Class</h3>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="space-y-4 mt-4 flex-grow">
                  <div className="bg-accent/10 rounded-lg p-3 border-l-4 border-accent">
                    <p className="text-foreground"><strong>Date:</strong> October 4th</p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3 border-l-4 border-accent">
                    <p className="text-foreground"><strong>Time:</strong> 5:00 PM EST</p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3 border-l-4 border-accent">
                    <p className="text-foreground"><strong>Format:</strong> Group session via Zoom</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 border-2 border-green-200">
                    <p className="text-foreground"><strong>Note:</strong> <span className="text-green-600 font-semibold">Free of charge</span>, registration required</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 shadow-lg"
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
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Advanced Topics Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Beyond Standard Curriculum</h2>
              <p className="text-muted-foreground text-center mb-8 text-lg">
                While mastering AP Computer Science A fundamentals, students also explore industry-relevant technologies.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 flex flex-col">
                  <div className="text-center mb-4 h-24 flex flex-col justify-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary-foreground font-bold text-lg">UI</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary">Java Swing & GUI Design</h3>
                  </div>
                  <p className="text-card-foreground text-sm leading-relaxed flex-grow">
                    Create interactive desktop applications with graphical user interfaces, learning event-driven programming and modern UI/UX principles.
                  </p>
                </div>
                
                <div className="bg-secondary/5 rounded-lg p-6 border border-secondary/20 flex flex-col">
                  <div className="text-center mb-4 h-24 flex flex-col justify-center">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-secondary-foreground font-bold text-lg">⚙️</span>
                    </div>
                    <h3 className="text-xl font-bold text-secondary">Gradle Build System</h3>
                  </div>
                  <p className="text-card-foreground text-sm leading-relaxed flex-grow">
                    Master professional dependency management, project automation, and software distribution using industry-standard build tools.
                  </p>
                </div>
                
                <div className="bg-accent/5 rounded-lg p-6 border border-accent/20 flex flex-col">
                  <div className="text-center mb-4 h-24 flex flex-col justify-center">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-accent-foreground font-bold text-lg">📊</span>
                    </div>
                    <h3 className="text-xl font-bold text-accent">Advanced Data Structures</h3>
                  </div>
                  <p className="text-card-foreground text-sm leading-relaxed flex-grow">
                    Dive deep into stacks, queues, hash maps, and algorithm optimization for enhanced problem-solving capabilities.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 bg-muted/30 rounded-lg p-4 border border-border">
                <p className="text-center text-muted-foreground text-sm">
                  <span className="font-semibold">Note:</span> Advanced topics are integrated throughout the curriculum and may vary based on class pace and student interest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Information Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-xl border-2 border-primary/10">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Additional Information</h2>
              <div className="space-y-6">
                <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                  <p className="text-foreground">
                    <strong className="text-primary">Zoom Access:</strong> After enrollment, you'll receive an email with the Zoom meeting link and instructions.
                  </p>
                </div>
                <div className="bg-secondary/10 rounded-lg p-4 border-l-4 border-secondary">
                  <p className="text-foreground">
                    <strong className="text-secondary">Materials:</strong> All course materials will be provided digitally before each class.
                  </p>
                </div>
                <div className="bg-accent/10 rounded-lg p-4 border-l-4 border-accent">
                  <p className="text-foreground">
                    <strong className="text-accent">Requirements:</strong> A computer with internet access and the ability to install and run Java.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4 border-2 border-muted-foreground/20">
                  <p className="text-foreground">
                    <strong className="text-muted-foreground">Questions?</strong> Feel free to contact us with any questions about class details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ClassDetails;
