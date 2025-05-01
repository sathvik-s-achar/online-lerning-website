export interface User {
  id: string;
  name: string;
  email: string;
  completedCourses: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  lessons: Lesson[];
  progress?: number;
  videoUrl?: string;
}

export interface Lesson {
  id: string;
  title: string;
  completed: boolean;
}
