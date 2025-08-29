
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar } from 'lucide-react';

const ClassDetails = () => {
  const enrollmentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdDVqZBOuSZVfkB5-4AqqAWDni1vjAIHMETCuAXKfnPaD0XFA/viewform?usp=sharing&ouid=111291158362256036501";
  const freeTrialFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSelVTTihDsBB3BQkvXYQwAsNxDGEwOBv1kEw7wjzNwQoHK0vg/viewform?usp=sharing&ouid=111291158362256036501";
  
  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-javaquest-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Class Details</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Information about our class schedules and formats
          </p>
        </div>
      </section>
      
      {/* Class details section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Regular Sessions Card */}
            <Card className="border-none shadow-lg overflow-hidden flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-javaquest-blue mb-4 mx-auto">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-javaquest-blue mb-2 text-center">Regular Sessions</h3>
                <div className="space-y-4 mt-4 flex-grow">
                  <div className="border-b pb-2">
                    <p className="text-gray-600"><strong>Duration:</strong> October 11th - End of May</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="text-gray-600"><strong>Day:</strong> Every Saturday</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="text-gray-600"><strong>Time:</strong> 5:00 PM EST</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="text-gray-600"><strong>Format:</strong> Group class via Zoom</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="text-gray-600"><strong>Note:</strong> Holidays excluded</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="text-gray-600"><strong>Price:</strong> <span className="font-bold text-javaquest-blue">$20/month</span></p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    asChild
                    className="w-full bg-javaquest-blue hover:bg-javaquest-blue/90"
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
            <Card className="border-none shadow-lg overflow-hidden flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-javaquest-teal mb-4 mx-auto">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-javaquest-teal mb-2 text-center">One-on-One Sessions</h3>
                <div className="space-y-4 mt-4 flex-grow">
                  <div className="border-b pb-2">
                    <p className="text-gray-600"><strong>Duration:</strong> October 11th - End of May</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="text-gray-600"><strong>Day:</strong> Every Sunday</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="text-gray-600"><strong>Time:</strong> 5:00 PM EST</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="text-gray-600"><strong>Format:</strong> Individual session via Zoom</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="text-gray-600"><strong>Note:</strong> Holidays excluded</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="text-gray-600"><strong>Price:</strong> <span className="font-bold text-javaquest-teal">$35/month</span></p>
                  </div>
                </div>
                <div className="mt-6">
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
                </div>
              </CardContent>
            </Card>
            
            {/* Free Trial Class Card */}
            <Card className="border-none shadow-lg overflow-hidden flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-javaquest-orange mb-4 mx-auto">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-javaquest-orange mb-2 text-center">Free Trial Class</h3>
                <div className="space-y-4 mt-4 flex-grow">
                  <div className="border-b pb-2">
                    <p className="text-gray-600"><strong>Date:</strong> October 4th</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="text-gray-600"><strong>Time:</strong> 5:00 PM EST</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="text-gray-600"><strong>Format:</strong> Group session via Zoom</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="text-gray-600"><strong>Note:</strong> Free of charge, registration required</p>
                  </div>
                </div>
                <div className="mt-6">
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
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Additional Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-javaquest-blue mb-6 text-center">Additional Information</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>Zoom Access:</strong> After enrollment, you'll receive an email with the Zoom meeting link and instructions.
                </p>
                <p className="text-gray-600">
                  <strong>Materials:</strong> All course materials will be provided digitally before each class.
                </p>
                <p className="text-gray-600">
                  <strong>Requirements:</strong> A computer with internet access and the ability to install and run Java.
                </p>
                <p className="text-gray-600">
                  <strong>Questions?</strong> Feel free to contact us with any questions about class details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ClassDetails;
