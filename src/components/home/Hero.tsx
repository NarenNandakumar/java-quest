
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="hero-gradient text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Learn Java. <span className="text-javaquest-orange">Change Lives.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              Master Java programming with expert instruction while supporting charitable causes around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-javaquest-orange hover:bg-javaquest-orange/90">
                <Link to="/programs">Start Learning Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-javaquest-blue">
                <Link to="/about">Learn More</Link>
              </Button>
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
