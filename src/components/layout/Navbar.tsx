
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Book, LogIn, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-javaquest-red-dark py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" aria-label="JavaQuest - Java Quest Programming Home">
          <div className="h-10 w-10 rounded-md bg-javaquest-red flex items-center justify-center">
            <span className="text-white font-bold text-xl">J</span>
          </div>
          <span className="text-white font-bold text-xl">JavaQuest</span>
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-javaquest-red-light transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-javaquest-red-light transition-colors">
            About Us
          </Link>
          <Link to="/testimonials" className="text-white hover:text-javaquest-red-light transition-colors">
            Testimonials
          </Link>
          <Link to="/class-details" className="text-white hover:text-javaquest-red-light flex items-center space-x-1 transition-colors">
            <Calendar size={16} />
            <span>Class Details</span>
          </Link>
          <Link to="/resources" className="text-white hover:text-javaquest-red-light flex items-center space-x-1 transition-colors">
            <Book size={16} />
            <span>Resources</span>
          </Link>
          <Button asChild variant="ghost" className="bg-transparent text-white hover:bg-javaquest-red hover:text-white">
            <Link to="/login" className="flex items-center space-x-1">
              <LogIn size={16} />
              <span>Login</span>
            </Link>
          </Button>
          <Button asChild className="bg-javaquest-red hover:bg-javaquest-red-light">
            <Link to="/programs">Enroll Now</Link>
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-javaquest-red-dark p-4 shadow-md animate-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-javaquest-red-light transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-javaquest-red-light transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/testimonials" 
              className="text-white hover:text-javaquest-red-light transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/class-details" 
              className="text-white hover:text-javaquest-red-light flex items-center space-x-2 px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar size={16} />
              <span>Class Details</span>
            </Link>
            <Link 
              to="/resources" 
              className="text-white hover:text-javaquest-red-light flex items-center space-x-2 px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Book size={16} />
              <span>Resources</span>
            </Link>
            <Link 
              to="/login" 
              className="text-white hover:text-javaquest-red-light flex items-center space-x-2 px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn size={16} />
              <span>Login</span>
            </Link>
            <Button 
              asChild 
              className="bg-javaquest-red hover:bg-javaquest-red-light w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/programs">Enroll Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
