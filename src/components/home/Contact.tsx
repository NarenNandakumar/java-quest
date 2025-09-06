
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Contact = () => {
  const trialFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSelVTTihDsBB3BQkvXYQwAsNxDGEwOBv1kEw7wjzNwQoHK0vg/viewform?usp=sharing&ouid=111291158362256036501";

  return (
    <section id="contact" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-accent/20">
              <h2 className="text-3xl font-bold text-primary mb-4">Try Our Free Java Class!</h2>
              <p className="text-muted-foreground mb-6">
                Not sure if coding is for you? Get a taste of our teaching style and curriculum with our free trial class.
                No commitment required!
              </p>
              <div className="flex justify-center mb-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-lg px-8 py-3 text-lg font-semibold">
                  <a 
                    href={trialFormUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Register for Free Trial
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground">
                Want to learn more about our programs first? <Link to="/class-details" className="text-primary hover:underline font-medium">View class details</Link> or <Link to="/programs" className="text-primary hover:underline font-medium">browse all our programs</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
