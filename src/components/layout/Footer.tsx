
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-javaquest-dark text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-javaquest-orange flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="text-white font-bold text-xl" aria-label="JavaQuest also known as Java Quest">JavaQuest</span>
            </div>
            <p className="text-gray-300 mb-4">
              Teaching Java programming while making a difference in the world. JavaQuest (Java Quest) offers expert coding instruction and charitable impact.
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} JavaQuest. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-javaquest-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-javaquest-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-javaquest-orange transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-300 hover:text-javaquest-orange transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <address className="not-italic text-gray-300">
              <p>Email: naren.nanda08@gmail.com</p>
              <p>Email: manu.s.pradeep@gmail.com</p>
              <p>Phone: 214-536-5483</p>
              <p>Phone: 469-487-4765</p>
            </address>
            <div className="mt-4 flex space-x-4">
              {/* Social media icons would go here */}
              <div className="h-8 w-8 rounded-full bg-javaquest-teal flex items-center justify-center">
                <span className="text-white text-sm">FB</span>
              </div>
              <div className="h-8 w-8 rounded-full bg-javaquest-teal flex items-center justify-center">
                <span className="text-white text-sm">TW</span>
              </div>
              <div className="h-8 w-8 rounded-full bg-javaquest-teal flex items-center justify-center">
                <span className="text-white text-sm">IG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
