
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  
  // In a real app, this would be determined by authentication state
  const isLoggedIn = localStorage.getItem('user') !== null;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and site name */}
          <div className="flex-shrink-0 flex items-center">
            <BookOpen className="h-8 w-8 text-brand-purple" />
            <span className="ml-2 text-xl font-bold text-gray-900">LearnSy</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-brand-purple px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/courses" className="text-gray-700 hover:text-brand-purple px-3 py-2 text-sm font-medium">
                Courses
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-brand-purple px-3 py-2 text-sm font-medium">
                About Us
              </Link>
              {isLoggedIn ? (
                <>
                  <Link to="/profile">
                    <Button variant="ghost" size="sm" className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline" size="sm">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button size="sm" className="bg-brand-purple hover:bg-opacity-90">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-purple hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/courses" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
              Courses
            </Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            {isLoggedIn ? (
              <>
                <Link to="/profile" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                  Profile
                </Link>
                <button onClick={() => {handleLogout(); setIsOpen(false);}} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-100 rounded-md">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
                <Link to="/signup" className="block px-3 py-2 text-base font-medium text-brand-purple hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
