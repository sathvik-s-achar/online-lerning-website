
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { BookOpen, BookCheck, Users, User } from 'lucide-react';
import { courses } from '@/data/mockData';

const Home = () => {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-purple/90 to-brand-purple py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Learn New Skills Online
              </h1>
              <p className="text-lg md:text-xl mb-6 text-white/90">
                Access our library of courses taught by industry experts and enhance your skills today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses">
                  <Button size="lg" className="bg-white text-brand-purple hover:bg-gray-100">
                    Browse Courses
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="lg" variant="outline" className="bg-white text-brand-purple hover:bg-gray-100">
                    Sign Up Free
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" 
                alt="Students learning online" 
                className="rounded-lg w-full h-64 object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Choose LearnHub</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center p-3 bg-brand-purple/10 rounded-full mb-4">
                <BookOpen className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Content</h3>
              <p className="text-gray-600">Courses created by industry experts with real-world experience.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center p-3 bg-brand-purple/10 rounded-full mb-4">
                <Users className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">Join our community of learners and get help when you need it.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center p-3 bg-brand-purple/10 rounded-full mb-4">
                <BookCheck className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
              <p className="text-gray-600">Monitor your learning journey with our progress tracking system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Courses</h2>
            <Link to="/courses" className="text-brand-purple hover:underline font-medium">
              View All
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px]">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-5">
                  <span className="inline-block px-3 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-xs font-medium mb-3">
                    {course.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <Link to={`/courses/${course.id}`}>
                    <Button variant="outline" className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple/10">
                      View Course
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students already learning on LearnHub. Create your account today.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90">
              <User className="h-5 w-5 mr-2" />
              Create Free Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
