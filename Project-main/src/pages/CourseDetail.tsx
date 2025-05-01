import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { courses } from '@/data/mockData';
import { Course, Lesson } from '@/types';
import { UserContext } from '@/context/UserContext';
import { toast } from '@/components/ui/sonner';
import { BookOpen, Clock, ListCheck, BookCheck, RefreshCw } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const { currentUser, completeCourse, uncompleteCourse } = useContext(UserContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    const foundCourse = courses.find(c => c.id === id);
    
    if (foundCourse) {
      setCourse(foundCourse);
      
      if (currentUser?.completedCourses.includes(foundCourse.id)) {
        setCompletedLessons(foundCourse.lessons.map(lesson => lesson.id));
      } else {
        setCompletedLessons([]);
      }
    }
  }, [id, currentUser]);

  const toggleLessonCompletion = (lessonId: string) => {
    if (!currentUser) {
      toast.error("Please log in to track your progress");
      navigate('/login');
      return;
    }
    
    setCompletedLessons(prev => {
      if (prev.includes(lessonId)) {
        return prev.filter(id => id !== lessonId);
      } else {
        return [...prev, lessonId];
      }
    });
  };

  const calculateProgress = (): number => {
    if (!course || course.lessons.length === 0) return 0;
    return Math.round((completedLessons.length / course.lessons.length) * 100);
  };

  const handleComplete = () => {
    if (!currentUser) {
      toast.error("Please log in to track your progress");
      navigate('/login');
      return;
    }
    
    if (course) {
      completeCourse(course.id);
      toast.success("Course marked as completed!");
    }
  };

  const handleUncomplete = () => {
    if (!currentUser) {
      toast.error("Please log in to track your progress");
      navigate('/login');
      return;
    }
    
    if (course) {
      uncompleteCourse(course.id);
      setCompletedLessons([]);
      toast.success("Course marked as incomplete!");
    }
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Course not found</p>
      </div>
    );
  }

  const progress = calculateProgress();
  const isCompleted = currentUser?.completedCourses.includes(course.id);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-64 object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 w-full">
                <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium mb-3">
                  {course.category}
                </span>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{course.title}</h1>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:gap-8">
              <div className="md:w-2/3">
                <h2 className="text-xl font-semibold mb-4">About This Course</h2>
                <p className="text-gray-600 mb-6">
                  {course.description}
                </p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    <ListCheck className="h-5 w-5 text-brand-purple mr-2" />
                    <span className="text-sm">{course.lessons.length} Lessons</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-brand-purple mr-2" />
                    <span className="text-sm">2 Hours</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-brand-purple mr-2" />
                    <span className="text-sm">Beginner</span>
                  </div>
                </div>

                <h2 className="text-xl font-semibold mb-4">Course Content</h2>
                <div className="space-y-4 mb-6">
                  {course.lessons.map((lesson: Lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center p-3 border border-gray-200 rounded-md"
                    >
                      <Checkbox
                        id={`lesson-${lesson.id}`}
                        checked={completedLessons.includes(lesson.id)}
                        onCheckedChange={() => toggleLessonCompletion(lesson.id)}
                        className="mr-3 data-[state=checked]:bg-brand-purple data-[state=checked]:border-brand-purple"
                      />
                      <label
                        htmlFor={`lesson-${lesson.id}`}
                        className="text-sm font-medium cursor-pointer flex-grow"
                      >
                        {lesson.title}
                      </label>
                    </div>
                  ))}

                  <Button
                    className="w-full bg-green-500 hover:bg-green-600 text-white mt-4"
                    onClick={() => {
                      if (course.videoUrl) {
                        window.open(course.videoUrl, '_blank'); // Open the video URL in a new tab
                      } else {
                        alert('No video URL available for this course.');
                      }
                    }}
                  >
                    Start Course
                  </Button>
                </div>
              </div>
              
              <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
                
                {isCompleted ? (
                  <div className="mb-4">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-2">
                        <BookCheck className="h-6 w-6 text-green-600" />
                      </div>
                      <p className="text-green-600 font-medium mb-4">Course Completed!</p>
                    </div>
                    
                    <Button
                      className="w-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center gap-2"
                      onClick={handleUncomplete}
                      disabled={!currentUser}
                    >
                      <RefreshCw className="h-4 w-4" />
                      Reset Progress
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm font-medium">{progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-brand-purple h-2.5 rounded-full" 
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        {completedLessons.length} of {course.lessons.length} lessons completed
                      </p>
                    </div>
                    
                    <Button
                      className="w-full bg-brand-purple hover:bg-brand-purple/90 mb-4"
                      onClick={handleComplete}
                      disabled={!currentUser}
                    >
                      Mark Course as Complete
                    </Button>
                  </>
                )}
                
                {!currentUser && (
                  <p className="text-sm text-gray-500 text-center">
                    Please log in to track your progress
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;