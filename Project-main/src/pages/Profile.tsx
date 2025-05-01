
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserContext } from '@/context/UserContext';
import { courses } from '@/data/mockData';
import { toast } from '@/components/ui/sonner';
import { User, PencilLine, BookCheck, BookOpen } from 'lucide-react';

const Profile = () => {
  const { currentUser, updateUser, logout } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(currentUser?.name || '');
  const navigate = useNavigate();

  // Redirect if not logged in
  if (!currentUser) {
    navigate('/login');
    return null;
  }

  const completedCourses = courses.filter(course => 
    currentUser.completedCourses.includes(course.id)
  );
  
  const handleUpdateProfile = () => {
    if (isEditing) {
      updateUser({ name });
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Profile</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - User Info */}
            <div className="md:w-1/3 bg-brand-purple p-6 text-white">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <User className="h-12 w-12" />
                </div>
                <h2 className="text-xl font-semibold">{currentUser.name}</h2>
                <p className="text-white/80">{currentUser.email}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <BookCheck className="h-5 w-5 mr-2" />
                  <span>{completedCourses.length} Courses Completed</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  <span>Learning since {new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Profile Details */}
            <div className="md:w-2/3 p-6">
              <h3 className="text-xl font-semibold mb-4">Account Details</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  {isEditing ? (
                    <Input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full"
                    />
                  ) : (
                    <p className="text-gray-900">{currentUser.name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <p className="text-gray-900">{currentUser.email}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Email cannot be changed
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button
                  onClick={handleUpdateProfile}
                  className={isEditing ? "bg-green-600 hover:bg-green-700" : "bg-brand-purple hover:bg-brand-purple/90"}
                >
                  <PencilLine className="h-4 w-4 mr-2" />
                  {isEditing ? "Save Changes" : "Edit Profile"}
                </Button>
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Completed Courses */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Completed Courses</h2>
          
          {completedCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {completedCourses.map(course => (
                <div key={course.id} className="bg-white rounded-lg p-4 flex items-center shadow-sm">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-20 h-20 object-cover rounded-md mr-4" 
                  />
                  <div>
                    <p className="font-medium">{course.title}</p>
                    <p className="text-sm text-gray-600">{course.category}</p>
                    <div className="flex items-center mt-1 text-green-600 text-xs">
                      <BookCheck className="h-4 w-4 mr-1" />
                      Completed
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-white rounded-lg shadow-sm">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No completed courses yet</h3>
              <p className="text-gray-600 mb-4">Start learning today to track your progress.</p>
              <Button onClick={() => navigate('/courses')} className="bg-brand-purple hover:bg-brand-purple/90">
                Browse Courses
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
