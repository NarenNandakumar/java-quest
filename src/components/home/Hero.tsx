
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="hero-gradient text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Learn Java. <span className="text-accent">Change Lives.</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-lg">
              Master Java programming with expert instruction while supporting charitable causes around the world.
            </p>
            <div className="bg-accent/20 backdrop-blur-sm rounded-lg p-4 mb-8 border-l-4 border-accent">
              <p className="text-white font-medium text-base">
                🚀 <strong>Beyond AP Computer Science A:</strong> We teach industry-relevant skills including JavaFX, advanced programming concepts, and real-world project development that prepare you for success in the tech industry.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/programs">Start Learning Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-foreground bg-white/90 hover:bg-white hover:text-primary">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            <div className="mt-4 bg-black/15 backdrop-blur-sm rounded-md px-4 py-2 inline-block">
              <p className="text-white/90 text-sm">
                New to coding? <Link to="/class-details" className="text-accent hover:underline font-medium">Try our free trial class!</Link>
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="code-snippet overflow-hidden rounded-md">
              <pre className="code-font text-sm md:text-base">
{`public class JavaQuest {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        Student student = new Student("You");
        student.learnJava();
        World.makePositiveImpact();
    }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
