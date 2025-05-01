
import { BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <BookOpen className="h-6 w-6 text-brand-purple" />
            <span className="ml-2 text-lg font-bold text-gray-900">Learnsy</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <a href="/" className="text-sm text-gray-600 hover:text-brand-purple">Home</a>
            <a href="/courses" className="text-sm text-gray-600 hover:text-brand-purple">Courses</a>
            <a href="/about" className="text-sm text-gray-600 hover:text-brand-purple">About Us</a>
            <a href="/login" className="text-sm text-gray-600 hover:text-brand-purple">Login</a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center">
          <p className="text-sm text-gray-500">© 2025 LearnHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
