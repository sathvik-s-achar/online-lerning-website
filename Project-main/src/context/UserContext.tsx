
// import { createContext, useState, useEffect, ReactNode } from 'react';
// import { User } from '@/types';

// interface UserContextType {
//   currentUser: User | null;
//   login: (email: string, password: string) => boolean;
//   signup: (name: string, email: string, password: string) => boolean;
//   logout: () => void;
//   updateUser: (userData: Partial<User>) => void;
//   completeCourse: (courseId: string) => void;
// }

// export const UserContext = createContext<UserContextType>({
//   currentUser: null,
//   login: () => false,
//   signup: () => false,
//   logout: () => {},
//   updateUser: () => {},
//   completeCourse: () => {},
// });

// interface UserProviderProps {
//   children: ReactNode;
// }

// export const UserProvider = ({ children }: UserProviderProps) => {
//   const [currentUser, setCurrentUser] = useState<User | null>(null);

//   useEffect(() => {
//     // Load user from localStorage on initial render
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setCurrentUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const login = (email: string, password: string): boolean => {
//     // In a real app, we would validate against a backend
//     // For demo purposes, we'll check localStorage
//     const users = JSON.parse(localStorage.getItem('users') || '[]');
//     const user = users.find((u: any) => u.email === email);
    
//     if (user) {
//       // Simulate password check (in a real app, never store plain passwords)
//       // For simplicity, we're not actually checking passwords in this demo
//       setCurrentUser(user);
//       localStorage.setItem('user', JSON.stringify(user));
//       return true;
//     }
//     return false;
//   };

//   const signup = (name: string, email: string, password: string): boolean => {
//     // In a real app, we would send this to a backend
//     // For demo purposes, we'll store in localStorage
//     const users = JSON.parse(localStorage.getItem('users') || '[]');
    
//     // Check if email already exists
//     if (users.some((u: any) => u.email === email)) {
//       return false;
//     }
    
//     const newUser: User = {
//       id: Date.now().toString(),
//       name,
//       email,
//       completedCourses: [],
//     };
    
//     users.push(newUser);
//     localStorage.setItem('users', JSON.stringify(users));
    
//     // Auto login after signup
//     setCurrentUser(newUser);
//     localStorage.setItem('user', JSON.stringify(newUser));
    
//     return true;
//   };

//   const logout = () => {
//     setCurrentUser(null);
//     localStorage.removeItem('user');
//   };

//   const updateUser = (userData: Partial<User>) => {
//     if (!currentUser) return;
    
//     const updatedUser = { ...currentUser, ...userData };
//     setCurrentUser(updatedUser);
    
//     // Update in localStorage
//     localStorage.setItem('user', JSON.stringify(updatedUser));
    
//     // Also update in the users array
//     const users = JSON.parse(localStorage.getItem('users') || '[]');
//     const updatedUsers = users.map((u: User) => 
//       u.id === currentUser.id ? updatedUser : u
//     );
//     localStorage.setItem('users', JSON.stringify(updatedUsers));
//   };

//   const completeCourse = (courseId: string) => {
//     if (!currentUser) return;
    
//     // Only add if not already completed
//     if (!currentUser.completedCourses.includes(courseId)) {
//       const updatedCompletedCourses = [...currentUser.completedCourses, courseId];
//       updateUser({ completedCourses: updatedCompletedCourses });
//     }
//   };

//   return (
//     <UserContext.Provider value={{ 
//       currentUser, 
//       login, 
//       signup, 
//       logout, 
//       updateUser,
//       completeCourse
//     }}>
//       {children}
//     </UserContext.Provider>
//   );
// };



import { createContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@/types';

interface UserContextType {
  currentUser: User | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  completeCourse: (courseId: string) => void;
  uncompleteCourse: (courseId: string) => void; // Add this line
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  login: () => false,
  signup: () => false,
  logout: () => {},
  updateUser: () => {},
  completeCourse: () => {},
  uncompleteCourse: () => {}, // Add this line
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    // Load user from localStorage on initial render
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    // In a real app, we would validate against a backend
    // For demo purposes, we'll check localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email);
    
    if (user) {
      // Simulate password check (in a real app, never store plain passwords)
      // For simplicity, we're not actually checking passwords in this demo
      setCurrentUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const signup = (name: string, email: string, password: string): boolean => {
    // In a real app, we would send this to a backend
    // For demo purposes, we'll store in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if email already exists
    if (users.some((u: any) => u.email === email)) {
      return false;
    }
    
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      completedCourses: [],
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto login after signup
    setCurrentUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  const updateUser = (userData: Partial<User>) => {
    if (!currentUser) return;
    
    const updatedUser = { ...currentUser, ...userData };
    setCurrentUser(updatedUser);
    
    // Update in localStorage
    localStorage.setItem('user', JSON.stringify(updatedUser));
    
    // Also update in the users array
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map((u: User) => 
      u.id === currentUser.id ? updatedUser : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const completeCourse = (courseId: string) => {
    if (!currentUser) return;
    
    // Only add if not already completed
    if (!currentUser.completedCourses.includes(courseId)) {
      const updatedCompletedCourses = [...currentUser.completedCourses, courseId];
      updateUser({ completedCourses: updatedCompletedCourses });
    }
  };

  // Add this new function
  const uncompleteCourse = (courseId: string) => {
    if (!currentUser) return;
    
    const updatedCompletedCourses = currentUser.completedCourses.filter(
      id => id !== courseId
    );
    updateUser({ completedCourses: updatedCompletedCourses });
  };

  return (
    <UserContext.Provider value={{ 
      currentUser, 
      login, 
      signup, 
      logout, 
      updateUser,
      completeCourse,
      uncompleteCourse // Add this line
    }}>
      {children}
    </UserContext.Provider>
  );
};