
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Book, LogIn, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-javaquest-blue py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-md bg-javaquest-orange flex items-center justify-center">
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
          <Link to="/" className="text-white hover:text-javaquest-orange transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-javaquest-orange transition-colors">
            About Us
          </Link>
          <Link to="/testimonials" className="text-white hover:text-javaquest-orange transition-colors">
            Testimonials
          </Link>
          <Link to="/class-details" className="text-white hover:text-javaquest-orange flex items-center space-x-1 transition-colors">
            <Calendar size={16} />
            <span>Class Details</span>
          </Link>
          <Link to="/resources" className="text-white hover:text-javaquest-orange flex items-center space-x-1 transition-colors">
            <Book size={16} />
            <span>Resources</span>
          </Link>
          <Button asChild variant="ghost" className="bg-transparent text-white hover:bg-javaquest-blue hover:text-javaquest-orange">
            <Link to="/login" className="flex items-center space-x-1">
              <LogIn size={16} />
              <span>Login</span>
            </Link>
          </Button>
          <Button asChild className="bg-javaquest-orange hover:bg-javaquest-orange/90">
            <Link to="/programs">Enroll Now</Link>
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-javaquest-blue p-4 shadow-md animate-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-javaquest-orange transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-javaquest-orange transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/testimonials" 
              className="text-white hover:text-javaquest-orange transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/class-details" 
              className="text-white hover:text-javaquest-orange flex items-center space-x-2 px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar size={16} />
              <span>Class Details</span>
            </Link>
            <Link 
              to="/resources" 
              className="text-white hover:text-javaquest-orange flex items-center space-x-2 px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Book size={16} />
              <span>Resources</span>
            </Link>
            <Link 
              to="/login" 
              className="text-white hover:text-javaquest-orange flex items-center space-x-2 px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn size={16} />
              <span>Login</span>
            </Link>
            <Button 
              asChild 
              className="bg-javaquest-orange hover:bg-javaquest-orange/90 w-full"
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
