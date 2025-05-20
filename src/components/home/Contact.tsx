
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Free Trial Class',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Inquiry Submitted",
      description: "We'll get back to you soon!",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: 'Free Trial Class',
      message: ''
    });
  };

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
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-semibold text-center text-javaquest-blue mb-4">Have Questions? Contact Us</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="program">Interested Program</Label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="Free Trial Class">Free Trial Class</option>
                  <option value="Java Fundamentals">Java Fundamentals</option>
                  <option value="Advanced Java">Advanced Java</option>
                  <option value="Java for Enterprise">Java for Enterprise</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Your Question</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Ask us anything about our Java classes..."
                rows={4}
              />
            </div>
            
            <Button type="submit" className="w-full bg-javaquest-teal hover:bg-javaquest-teal/90">
              Submit Question
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
