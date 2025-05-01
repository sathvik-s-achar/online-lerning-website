
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { courses } from '@/data/mockData';
import { Course } from '@/types';
import { UserContext } from '@/context/UserContext';
import { Search, BookCheck } from 'lucide-react';

const CoursesList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { currentUser } = useContext(UserContext);
  
  // Extract unique categories
  const categories = ['All', ...new Set(courses.map(course => course.category))];

  // Filter courses based on search query and category
  useEffect(() => {
    let result = courses;
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(course => 
        course.title.toLowerCase().includes(query) || 
        course.description.toLowerCase().includes(query)
      );
    }
    
    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(course => course.category === selectedCategory);
    }
    
    // Add progress information for logged-in users
    if (currentUser) {
      result = result.map(course => ({
        ...course,
        progress: currentUser.completedCourses.includes(course.id) ? 100 : 0
      }));
    }
    
    setFilteredCourses(result);
  }, [searchQuery, selectedCategory, currentUser]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Browse Courses</h1>
        
        {/* Search and Filter Section */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-brand-purple" : ""}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px]">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="inline-block px-3 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-xs font-medium">
                      {course.category}
                    </span>
                    
                    {course.progress === 100 && (
                      <span className="inline-flex items-center text-green-600 text-xs font-medium">
                        <BookCheck className="h-4 w-4 mr-1" />
                        Completed
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {course.description}
                  </p>
                  
                  {course.progress !== undefined && course.progress < 100 && (
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div 
                        className="bg-brand-purple h-2 rounded-full" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  )}
                  
                  <Link to={`/courses/${course.id}`}>
                    <Button variant="outline" className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple/10">
                      {course.progress === 100 ? "Review Course" : "View Course"}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filter to find courses.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesList;
