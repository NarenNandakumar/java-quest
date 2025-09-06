
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import aboutImage from '@/assets/about-hero-image.jpg';

const AboutPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img 
                src={aboutImage}
                alt="JavaQuest coding education workspace" 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              About JavaQuest
            </h2>
            <p className="text-foreground/80 mb-6">
              Founded by Naren Nandakumar and Manu Pradeep, with Soham Sakpal as Finance Lead, JavaQuest combines their passion for technology education with a commitment to social responsibility. We believe that learning to code should not only advance your career but also contribute to making the world a better place.
            </p>
            <p className="text-foreground/80 mb-6">
              Every course you take with us helps fund important causes like education, healthcare, and environmental conservation in communities around the world.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarImage src="/lovable-uploads/34216a92-321c-41a1-961e-c1a55736da99.png" alt="Naren Nandakumar" />
                  <AvatarFallback>NN</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarImage src="/lovable-uploads/aae73d51-3df0-4bc7-961a-31d1e3f50854.png" alt="Manu Pradeep" />
                  <AvatarFallback>MP</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarImage src="/lovable-uploads/ecde2c6a-04c3-4199-b3ef-01e5f1fc5030.png" alt="Soham Sakpal" />
                  <AvatarFallback>SS</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">Our team</span>
              </div>
              <div className="bg-secondary/10 rounded-lg p-4 border-l-4 border-primary">
                <p className="text-sm text-foreground/90 italic">
                  "Hello, I'm Soham Sakpal, a senior at Lambert High School with a passion for technology and leadership. I've been involved in robotics for several years, serving as project manager and training lead, where I've developed skills in collaboration, problem-solving, and innovation. I've worked on large scale app development and deployment with Java and online systems for wireless data transfer. I look forward to helping others grow in their STEM journey." - <strong>Soham Sakpal, Finance Lead</strong>
                </p>
              </div>
            </div>
            <Button asChild variant="default">
              <Link to="/about">Read Our Full Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
