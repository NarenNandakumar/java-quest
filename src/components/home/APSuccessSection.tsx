
import { Card, CardContent } from '@/components/ui/card';
import { Laptop, Book, GraduationCap, CheckCircle } from 'lucide-react';

const APSuccessSection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="bg-card border border-border rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary">Beyond AP Computer Science A Success</h2>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-4 border-l-4 border-l-accent">
              <p className="text-card-foreground font-medium">
                <strong>Complete AP CSA Coverage + Industry Skills:</strong> We thoroughly cover all AP Computer Science A concepts to ensure exam success, while also teaching industry-relevant skills including Java graphics, advanced programming concepts, and real-world project development that prepare students for success in the tech industry.
              </p>
            </div>
            <p className="text-muted-foreground max-w-3xl mx-auto mt-3">
              Our curriculum is specially designed to help students excel in the AP Computer Science A exam while developing practical skills beyond the test requirements.
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
              <h3 className="font-bold text-lg text-javaquest-blue mb-2">Java Graphics Skills</h3>
              <p className="text-gray-600">
                Learn GUI development with Java graphics, going beyond AP requirements to build interactive applications.
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
        
        <div className="bg-card border border-border p-6 rounded-lg max-w-4xl mx-auto shadow-md">
          <p className="text-primary font-medium text-center">
            Whether you're preparing for the AP Computer Science A exam or want to build a strong foundation in Java programming, 
            our curriculum offers the perfect balance of theory and practical application.
          </p>
        </div>
      </div>
    </section>
  );
};

export default APSuccessSection;
