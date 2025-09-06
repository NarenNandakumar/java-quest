
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About JavaQuest</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Teaching Java programming while making a positive impact on the world.
          </p>
        </div>
      </section>
      
      {/* Mission section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Our Mission</h2>
            <p className="text-foreground/80 text-lg mb-4">
              At JavaQuest, we believe that education has the power to transform lives—not just the lives of our students who learn valuable programming skills, but also the lives of people around the world who benefit from our charitable initiatives.
            </p>
            <p className="text-foreground/80 text-lg mb-4">
              Our mission is twofold: to provide high-quality Java programming education that prepares students for successful careers in technology, and to use the proceeds from our courses to support non-profit organizations working to solve pressing global challenges.
            </p>
            <p className="text-foreground/80 text-lg">
              When you enroll in a JavaQuest course, you're not just investing in your future—you're also contributing to a better world for everyone.
            </p>
          </div>
        </div>
      </section>
      
      {/* Team section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Founder 1 */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="/lovable-uploads/34216a92-321c-41a1-961e-c1a55736da99.png" 
                  alt="Naren Nandakumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">Naren Nandakumar</h3>
                <p className="text-muted-foreground mb-4">Co-Founder & Technical Director</p>
                <p className="text-foreground/80">
                  Hello, I'm Naren Nandakumar and I have been programming for more than 5 years now! 
                  Having learnt AP CSA in 9th grade and teaching it since, I have almost 3 years of 
                  experience teaching and know exactly what students need the most to succeed in their class. 
                  Some of my accomplishments include programming an optimal maze solver, a graphing calculator 
                  application, an optimal tic-tac-toe agent, 3D voxel video game, and a health app with the 
                  sole goal of reducing the barrier to affordable healthcare. I love computer science and 
                  the opportunity to brighten those on its path!
                </p>
              </CardContent>
            </Card>
            
            {/* Founder 2 */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="/lovable-uploads/aae73d51-3df0-4bc7-961a-31d1e3f50854.png" 
                  alt="Manu Pradeep" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">Manu Pradeep</h3>
                <p className="text-muted-foreground mb-4">Co-Founder & Impact Director</p>
                <p className="text-foreground/80">
                  Hello, I'm Manu Pradeep, a senior at Lone Star High School in Texas. I have been passionate about programming for several years and have honed my skills through dedicated practice and project development. As the co-founder of JavaQuest, I have spent the past three years teaching Java to students, helping them not only understand the fundamentals of coding but also excel in their coursework, particularly in AP Computer Science A, a course that I excelled in. My notable projects include an online guitar simulator, a sound visualizer, a sandbox game, a 2D platformer game, and a visualizer for Conway's Game of Life. I've also received a Java certification from Certiport as well. I love computer science and the opportunity to brighten those on its path!
                </p>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </section>
      
      {/* Story section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Our Story</h2>
            <p className="text-foreground/80 text-lg mb-4">
              Founded in 2023, JavaQuest began when we saw a major problem in the world: Many people lack the resources and necessities we often take for granted. We wanted to find a way to raise money for these individuals, which is why we decided to teach Java and donate the money we made to non-profits whose sole purpose is bettering the lives of those in need. What started as a small community project has now evolved into a full organization, teaching many students and helping lives in America and beyond.
            </p>
          </div>
        </div>
      </section>
      
      {/* Values section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-20 w-20 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                <span className="text-3xl text-primary-foreground">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Excellence in Education</h3>
              <p className="text-foreground/80">
                We are committed to providing the highest quality programming education through well-designed curriculum and dedicated instruction.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-20 w-20 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-3xl text-secondary-foreground">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Social Responsibility</h3>
              <p className="text-foreground/80">
                We believe in using our skills and resources to create positive change in communities around the world.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-20 w-20 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <span className="text-3xl text-accent-foreground">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Continuous Growth</h3>
              <p className="text-foreground/80">
                We foster a culture of lifelong learning and constant improvement among our students, team, and community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
