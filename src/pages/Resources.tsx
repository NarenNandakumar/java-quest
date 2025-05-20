
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Resources = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    // Check if user is authenticated by looking for token in localStorage
    const authToken = localStorage.getItem('javaquest-auth-token');
    if (authToken) {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-javaquest-blue mb-6">Resources</h1>
            <p className="text-gray-600 mb-8">
              Access to course resources is restricted to enrolled students.
              Please log in to view course materials.
            </p>
            <Button asChild className="bg-javaquest-teal hover:bg-javaquest-teal/90">
              <Link to="/login">Log In Now</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-javaquest-blue mb-6">Course Resources</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-bold text-javaquest-blue mb-4">Week 1: Introduction to Java</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Course Syllabus</li>
              <li>Setting up your development environment</li>
              <li>Hello World program walkthrough</li>
            </ul>
            <Button className="bg-javaquest-orange hover:bg-javaquest-orange/90">
              Download Materials
            </Button>
          </div>
          
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-bold text-javaquest-blue mb-4">Week 2: Variables and Data Types</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Primitive data types</li>
              <li>Reference types</li>
              <li>Type conversion</li>
            </ul>
            <Button className="bg-javaquest-orange hover:bg-javaquest-orange/90">
              Download Materials
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 italic mb-4">More resources will be added as the course progresses.</p>
          <Button variant="outline" onClick={() => {
            localStorage.removeItem('javaquest-auth-token');
            setIsAuthenticated(false);
          }}>
            Log Out
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
