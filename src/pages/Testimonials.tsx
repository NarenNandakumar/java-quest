
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  // Placeholder testimonials - these would be replaced with real content later
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      company: "Tech Innovations",
      image: "placeholder1",
      quote: "JavaQuest's curriculum was exactly what I needed to transition into a Java development role. The instructors were knowledgeable and supportive, and knowing my tuition was helping others made the experience even more rewarding."
    },
    {
      name: "Michael Chen",
      role: "Computer Science Student",
      company: "University of Technology",
      image: "placeholder2",
      quote: "As a CS student, I wanted to deepen my Java skills beyond what my university courses offered. JavaQuest provided practical, hands-on learning that prepared me for my internship and made me feel good about contributing to charitable causes."
    },
    {
      name: "Priya Patel",
      role: "QA Engineer",
      company: "SoftwareWorks Inc.",
      image: "placeholder3",
      quote: "Learning Java through JavaQuest helped me automate testing processes at my company and advance in my career. The community aspect and social impact of the program added an extra dimension that I didn't find in other coding courses."
    },
    {
      name: "David Rodriguez",
      role: "IT Specialist",
      company: "Global Solutions",
      image: "placeholder4",
      quote: "I had tried other programming courses before, but JavaQuest's approach finally made Java click for me. The real-world projects and supportive instructors made all the difference. Plus, it feels great knowing my tuition is helping important causes."
    },
    {
      name: "Emma Wilson",
      role: "Career Changer",
      company: "FinTech Startup",
      image: "placeholder5",
      quote: "After 10 years in marketing, I decided to switch to programming. JavaQuest not only taught me the skills I needed but also helped me land my first developer job. The dual mission of education and charity aligned perfectly with my values."
    },
    {
      name: "James Taylor",
      role: "Web Developer",
      company: "Creative Digital",
      image: "placeholder6",
      quote: "Adding Java to my web development skillset opened up so many opportunities. JavaQuest's focused curriculum and project-based learning approach were exactly what I needed. I recommend their courses to everyone I know in tech."
    }
  ];

  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-javaquest-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Student Testimonials</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Hear from our students about their experience learning Java with JavaQuest.
          </p>
        </div>
      </section>
      
      {/* Testimonials grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our students come from diverse backgrounds and career stages, but they all share one thing: they've found success through our Java programming courses while making a positive impact on the world.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg border-none h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6 flex items-center">
                    <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                      <span className="text-gray-500 text-sm">[Photo]</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-javaquest-blue">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="text-5xl text-javaquest-teal mb-4">"</div>
                    <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl text-javaquest-blue mb-4">
              Ready to join our community of successful Java developers?
            </p>
            <a 
              href="/#contact" 
              className="inline-block bg-javaquest-orange hover:bg-javaquest-orange/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Start Your Journey Today
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-javaquest-blue mb-4">Share Your Success Story</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Are you a JavaQuest graduate? We'd love to hear about your experience and how our courses have helped you in your career.
          </p>
          <a 
            href="mailto:stories@javaquest.org" 
            className="inline-block bg-javaquest-blue hover:bg-javaquest-blue/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Submit Your Story
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
