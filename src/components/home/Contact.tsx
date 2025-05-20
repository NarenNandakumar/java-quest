
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Contact = () => {
  const trialFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSelVTTihDsBB3BQkvXYQwAsNxDGEwOBv1kEw7wjzNwQoHK0vg/viewform?usp=sharing&ouid=111291158362256036501";

  return (
    <section id="contact" className="py-20 bg-javaquest-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-javaquest-blue mb-4">Try Our Free Java Class!</h2>
            <p className="text-gray-600 mb-6">
              Not sure if coding is for you? Get a taste of our teaching style and curriculum with our free trial class.
              No commitment required!
            </p>
            <div className="flex justify-center mb-8">
              <Button asChild size="lg" className="bg-javaquest-orange hover:bg-javaquest-orange/90">
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
            <p className="text-gray-600">
              Want to learn more about our programs first? <Link to="/class-details" className="text-javaquest-blue hover:underline">View class details</Link> or <Link to="/programs" className="text-javaquest-blue hover:underline">browse all our programs</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
