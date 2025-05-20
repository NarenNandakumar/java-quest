
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Login = () => {
  const [accessCode, setAccessCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // For demo purposes, let's have some valid codes
  const validCodes = ['javaquest123', 'student2023', 'java2023'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      if (validCodes.includes(accessCode.trim())) {
        // Store authentication token in localStorage
        localStorage.setItem('javaquest-auth-token', 'valid-demo-token');
        toast.success('Login successful!');
        navigate('/resources');
      } else {
        toast.error('Invalid access code. Please try again.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-javaquest-blue">Student Login</CardTitle>
              <CardDescription>
                Enter your access code to view course resources.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="accessCode">Access Code</Label>
                    <Input 
                      id="accessCode" 
                      type="text" 
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                      placeholder="Enter your access code"
                      required
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  type="submit" 
                  className="w-full bg-javaquest-teal hover:bg-javaquest-teal/90"
                  disabled={isLoading}
                >
                  {isLoading ? 'Loading...' : 'Log In'}
                </Button>
              </CardFooter>
            </form>
          </Card>
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Don't have an access code? Enroll in one of our courses to receive one.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
