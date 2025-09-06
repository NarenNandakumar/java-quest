
import { Card, CardContent } from '@/components/ui/card';
import { Laptop, Book, GraduationCap, CheckCircle } from 'lucide-react';

const APSuccessSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="bg-secondary/10 rounded-lg shadow-sm p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary">AP Computer Science A Success</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mt-3">
              Our curriculum is specially designed to help students excel in the AP Computer Science A exam
              while developing practical skills beyond the test requirements.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-md border-t-4 border-t-javaquest-orange hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <GraduationCap className="h-10 w-10 text-javaquest-blue mb-4" />
              <h3 className="font-bold text-lg text-javaquest-blue mb-2">AP Exam Preparation</h3>
              <p className="text-gray-600">
                Comprehensive coverage of all AP CS A exam topics with practice questions and exam strategies.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md border-t-4 border-t-javaquest-orange hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Laptop className="h-10 w-10 text-javaquest-blue mb-4" />
              <h3 className="font-bold text-lg text-javaquest-blue mb-2">JavaFX Skills</h3>
              <p className="text-gray-600">
                Learn GUI development with JavaFX, going beyond AP requirements to build interactive applications.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md border-t-4 border-t-javaquest-orange hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Book className="h-10 w-10 text-javaquest-blue mb-4" />
              <h3 className="font-bold text-lg text-javaquest-blue mb-2">Project-Based Learning</h3>
              <p className="text-gray-600">
                Apply concepts through real-world projects that reinforce understanding while building your portfolio.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md border-t-4 border-t-javaquest-orange hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <CheckCircle className="h-10 w-10 text-javaquest-blue mb-4" />
              <h3 className="font-bold text-lg text-javaquest-blue mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Our students consistently achieve high scores on the AP exam while gaining practical programming experience.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg max-w-4xl mx-auto">
          <p className="text-javaquest-blue font-medium text-center">
            Whether you're preparing for the AP Computer Science A exam or want to build a strong foundation in Java programming, 
            our curriculum offers the perfect balance of theory and practical application.
          </p>
        </div>
      </div>
    </section>
  );
};

export default APSuccessSection;
