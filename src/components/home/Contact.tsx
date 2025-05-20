
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Java Fundamentals',
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
      program: 'Java Fundamentals',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-javaquest-blue mb-4">Ready to Start Your Java Journey?</h2>
            <p className="text-gray-600">
              Fill out the form below, and one of our team members will contact you with more information.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg p-8 shadow-md">
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
                  <option value="Java Fundamentals">Java Fundamentals</option>
                  <option value="Advanced Java">Advanced Java</option>
                  <option value="Java for Enterprise">Java for Enterprise</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your previous experience with programming, your goals, or any questions you might have."
                rows={4}
              />
            </div>
            
            <Button type="submit" className="w-full bg-javaquest-orange hover:bg-javaquest-orange/90">
              Submit Inquiry
            </Button>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              By submitting this form, you agree to be contacted about our programs and services.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
