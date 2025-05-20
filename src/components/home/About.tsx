
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800"
                alt="Code education" 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-javaquest-blue mb-4">
              About JavaQuest
            </h2>
            <p className="text-gray-600 mb-6">
              Founded by Naren Nandakumar and Manu Pradeep, JavaQuest combines their passion for technology education with a commitment to social responsibility. We believe that learning to code should not only advance your career but also contribute to making the world a better place.
            </p>
            <p className="text-gray-600 mb-6">
              Every course you take with us helps fund important causes like education, healthcare, and environmental conservation in communities around the world.
            </p>
            <Button asChild className="bg-javaquest-blue hover:bg-javaquest-blue/90">
              <Link to="/about">Read Our Full Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
