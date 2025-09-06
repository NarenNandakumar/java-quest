
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  // Updated testimonials with real content
  const testimonials = [
    {
      name: "Sohum",
      quote: "This class was great with slides that were very well organized with detailed explanations. I had fun learning."
    },
    {
      name: "Riaan",
      quote: "This class was excellent; they taught us in a way that we could understand everything. This overall class was really good, and it felt like the teachers were doing a college course themselves."
    },
    {
      name: "Sanaa",
      quote: "I would say my experience was really great since I learned lots of information and it helped me understand Java programming better. The teaching was amazing as well."
    },
    {
      name: "Tanvi",
      quote: "The lessons helped when learning the basics of Java. I was able to understand most of the topics and all my questions were answered."
    }
  ];

  const testimonialFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc17NUibCk8PivRmtTxsnEhmUIq27PLtaCZqYRu-71Qbc9yJw/viewform?usp=sharing&ouid=111291158362256036501";

  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Student Testimonials</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Hear from our students about their experience learning Java with JavaQuest.
          </p>
        </div>
      </section>
      
      {/* Testimonials grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <p className="text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
            Our students come from diverse backgrounds and career stages, but they all share one thing: they've found success through our Java programming courses while making a positive impact on the world.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg border-none h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex-grow">
                    <div className="text-5xl text-primary mb-4">"</div>
                    <p className="text-foreground/80 italic mb-6">{testimonial.quote}</p>
                    <p className="font-bold text-primary text-right">- {testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl text-primary mb-4">
              Ready to join our community of successful Java developers?
            </p>
            <a 
              href="/programs" 
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium py-3 px-6 rounded-md transition-colors"
            >
              Start Your Journey Today
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Share Your Success Story</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
            Are you a JavaQuest graduate? We'd love to hear about your experience and how our courses have helped you in your career.
          </p>
          <a 
            href={testimonialFormUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-md transition-colors"
          >
            Submit Your Story
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
