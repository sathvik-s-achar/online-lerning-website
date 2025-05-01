import { Course } from '@/types';

export const courses: Course[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript. This course is perfect for beginners who want to start creating websites.",
    image: "https://futurevisioncomputers.com/wp-content/uploads/2024/03/web_development_Z62jy4k-1024x576.jpg",
    category: "Web Development",
    lessons: [
      { id: "1-1", title: "HTML Basics", completed: false },
      { id: "1-2", title: "CSS Styling", completed: false },
      { id: "1-3", title: "JavaScript Fundamentals", completed: false },
      { id: "1-4", title: "Building a Simple Webpage", completed: false }
    ],
    videoUrl: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe0PY9xunOzsP5kmYIz2Hu7i" // Add this property
  },
  {
    id: "2",
    title: "Python Programming for Beginners",
    description: "Start your programming journey with Python. This course covers Python syntax, data types, control structures, and basic algorithms.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBf-V5j9fhMzn0zruq47o1EjiHp-MDwpVdBCm3rK-eu7uf0e7EiKcIuNsQTIYL-B1RQ0&usqp=CAU",
    category: "Programming",
    lessons: [
      { id: "2-1", title: "Python Setup", completed: false },
      { id: "2-2", title: "Variables and Data Types", completed: false },
      { id: "2-3", title: "Control Structures", completed: false },
      { id: "2-4", title: "Functions and Modules", completed: false }
    ],
    videoUrl: "https://www.youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0" // Add this property
  },
  {
    id: "3",
    title: "Digital Marketing Essentials",
    description: "Understand the fundamentals of digital marketing including SEO, social media marketing, email campaigns, and analytics.",
    image: "https://media.licdn.com/dms/image/v2/C4D12AQHsAZPIYTOdiQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1633474800753?e=2147483647&v=beta&t=r2MMNJQBil81MyteaiXkqwacCPDSDTk0XrgrLzj3v4c",
    category: "Marketing",
    lessons: [
      { id: "3-1", title: "Digital Marketing Overview", completed: false },
      { id: "3-2", title: "SEO Fundamentals", completed: false },
      { id: "3-3", title: "Social Media Strategy", completed: false },
      { id: "3-4", title: "Analytics and Reporting", completed: false }
    ],
    videoUrl: "https://www.youtube.com/playlist?list=PLLSovFY-eK2_1isRMtrNS_me4zDrs2CuS" // Add this property
  },
  {
    id: "4",
    title: "Graphic Design Fundamentals",
    description: "Learn the basics of graphic design including color theory, typography, layout design, and using design software.",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQFd1iZ-YoIs3g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1657117583525?e=2147483647&v=beta&t=iA9RATCIxHozhIjracFixGq0nrpkWd5zxxMz3hCQyO4",
    category: "Design",
    lessons: [
      { id: "4-1", title: "Design Principles", completed: false },
      { id: "4-2", title: "Color Theory", completed: false },
      { id: "4-3", title: "Typography Basics", completed: false },
      { id: "4-4", title: "Layout and Composition", completed: false }
    ],
    videoUrl: "https://www.youtube.com/playlist?list=PLgGbWId6zgaXiWYDAcJbXzBNlAnYg7pgL" // Add this property
  },
  {
    id: "5",
    title: "Data Science Introduction",
    description: "Start your journey into data science. Learn about data analysis, visualization, and basic statistical concepts.",
    image: "https://www.fsm.ac.in/blog/wp-content/uploads/2022/07/FUqHEVVUsAAbZB0-1024x580.jpg",
    category: "Data Science",
    lessons: [
      { id: "5-1", title: "Data Science Overview", completed: false },
      { id: "5-2", title: "Data Collection and Cleaning", completed: false },
      { id: "5-3", title: "Data Visualization", completed: false },
      { id: "5-4", title: "Basic Statistical Analysis", completed: false }
    ],
    videoUrl: "https://www.youtube.com/watch?v=-ETQ97mXXF0" // Add this property
  },
  {
    id: "6",
    title: "Mobile App Development",
    description: "Learn how to develop mobile applications for iOS and Android platforms using React Native.",
    image: "https://img.freepik.com/premium-vector/app-development-flat-landing-page-team-developers-creating-mobile-application-illustration-full-stack-development-software-engineering-web-page-composition-with-people-characters_9209-3576.jpg?w=900",
    category: "Web Development",
    lessons: [
      { id: "6-1", title: "React Native Setup", completed: false },
      { id: "6-2", title: "Building UI Components", completed: false },
      { id: "6-3", title: "State Management", completed: false },
      { id: "6-4", title: "Publishing Your App", completed: false }
    ],
    videoUrl: "https://www.youtube.com/playlist?list=PLUhfM8afLE_NQbVaoIEhceR9npbY57Pdg" // Add this property
  },
  {
    id: "7",
    title: "Introduction to C",
    description: "Learn how to build efficient and powerful applications by mastering the fundamental of C programming.",
    image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230630120259/C-Language-Introduction.png",
    category: "Programming",
    lessons: [
      { id: "7-1", title: "Introduction to C Programming", completed: false },
      { id: "7-2", title: "Data Types and Variables in C", completed: false },
      { id: "7-3", title: "Control Structures (if, else, loops)", completed: false },
      { id: "7-4", title: "Functions and Modular Programming", completed: false },
      { id: "7-5", title: "Pointers and Memory Management", completed: false },
      { id: "7-6", title: "File Handling in C", completed: false }
    ],
    videoUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR" // Add this property
  },
  {
    id: "8",
    title: "Introduction to C++",
    description: "Learn how to build efficient and powerful applications by mastering the fundamental of C++ programming.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-FMOSFbVDTAgCh1QVnWbHEbXu63gTrnMnjQ&s",
    category: "Programming",
    lessons: [
      { id: "8-1", title: "Introduction to C++ Programming", completed: false },
      { id: "8-2", title: "Object-Oriented Programming Basics", completed: false },
      { id: "8-3", title: "Classes and Objects in C++", completed: false },
      { id: "8-4", title: "Inheritance and Polymorphism", completed: false },
      { id: "8-5", title: "Templates and STL (Standard Template Library)", completed: false },
      { id: "8-6", title: "Exception Handling in C++", completed: false }
    ],
    videoUrl: "https://www.youtube.com/playlist?list=PLdo5W4Nhv31YU5Wx1dopka58teWP9aCee" // Add this property
  },
  {
    id: "9",
    title: "Introduction to Data Analysis",
    description: "Learn the fundamentals of data analysis, including data cleaning, exploratory data analysis (EDA), data visualization, and basic statistical techniques. This course is designed to help you understand how to work with data effectively and make data-driven decisions. Perfect for beginners who want to start their journey in data science and analytics.",
    image: "https://www.digitalvidya.com/blog/wp-content/uploads/2016/12/data-analytics1.webp",
    category: "Data Science",
    lessons: [
      { id: "9-1", title: "Introduction to Data Analysis", completed: false },
      { id: "9-2", title: "Data Cleaning and Preparation", completed: false },
      { id: "9-3", title: "Exploratory Data Analysis (EDA)", completed: false },
      { id: "9-4", title: "Data Visualization Techniques", completed: false },
      { id: "9-5", title: "Statistical Analysis Basics", completed: false },
      { id: "9-6", title: "Introduction to Machine Learning", completed: false }
    ],
    videoUrl: "https://www.youtube.com/playlist?list=PLjVLYmrlmjGdRs1sGqRrTE-EMraLclJga" // Add this property
  },
  {
    id: "10",
    title: "Web Designing with Figma and Photoshop",
    description: "Learn the fundamentals of web designing using tools like Figma and Photoshop. This course covers design principles, prototyping, and creating visually appealing web layouts.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQEMcOnKrSXMKkjGNg7pOYtZc3zhxO5aDew&s",
    category: "Design",
    lessons: [
      { id: "10-1", title: "Introduction to Figma and Photoshop", completed: false },
      { id: "10-2", title: "Creating Wireframes and Prototypes", completed: false },
      { id: "10-3", title: "Designing Responsive Web Layouts", completed: false },
      { id: "10-4", title: "Advanced Photoshop Techniques for Web Design", completed: false },
      { id: "10-5", title: "Exporting Assets for Development", completed: false }
    ],
    videoUrl: "https://www.youtube.com/playlist?list=PLXC_gcsKLD6n7p6tHPBxsKjN5hA_quaPI"
  },
  {
    id: "11",
    title: "UI/UX Design",
    description: "Master the principles of UI/UX design to create user-friendly and visually appealing interfaces. Learn about user research, wireframing, prototyping, and usability testing.",
    image: "https://cdn.cmsfly.com/635bcad9b8a74e0091632998/ui-and-ux-design-W7OQAE.png",
    category: "Design",
    lessons: [
      { id: "11-1", title: "Introduction to UI/UX Design", completed: false },
      { id: "11-2", title: "User Research and Personas", completed: false },
      { id: "11-3", title: "Wireframing and Prototyping", completed: false },
      { id: "11-4", title: "Usability Testing and Feedback", completed: false },
      { id: "11-5", title: "Designing for Accessibility", completed: false }
    ],
    videoUrl: "https://www.youtube.com/playlist?list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT"
  },
  {
    id: "12",
    title: "Introduction to Java",
    description: "Learn the fundamentals of Java programming, including syntax, object-oriented programming, and building basic applications.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz0MwfI8Ua47DJgDGejzmykHF-RBHD2iWEXg&s",
    category: "Programming",
    lessons: [
      { id: "12-1", title: "Introduction to Java Programming", completed: false },
      { id: "12-2", title: "Variables, Data Types, and Operators", completed: false },
      { id: "12-3", title: "Control Flow Statements", completed: false },
      { id: "12-4", title: "Object-Oriented Programming Basics", completed: false },
      { id: "12-5", title: "Exception Handling in Java", completed: false }
    ],
    videoUrl: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop"
  },
  {
    id: "13",
    title: "Mastering Adobe Photoshop for Graphic Design",
    description: "Learn advanced techniques in Adobe Photoshop to create stunning graphic designs. This course covers photo editing, typography, and creating professional-grade visuals.",
    image: "https://www.admecindia.co.in/wp-content/uploads/2024/03/Ways-Photoshop-Benefit-a-Graphic-Design-Course.jpg",
    category: "Design",
    lessons: [
      { id: "13-1", title: "Introduction to Adobe Photoshop", completed: false },
      { id: "13-2", title: "Photo Editing and Retouching", completed: false },
      { id: "13-3", title: "Working with Layers and Masks", completed: false },
      { id: "13-4", title: "Typography and Text Effects", completed: false },
      { id: "13-5", title: "Creating Professional Graphic Designs", completed: false }
    ],
    videoUrl: "https://www.youtube.com/playlist?list=PLLlSBGLVsEPIFGSGw2zJ2K43V5vxMMMTE"
  },
  {
    id: "14",
    title: "Introduction to Next.js for Server-Side Rendering",
    description: "Learn how to build server-side rendered web applications using Next.js. This course covers routing, API integration, and deploying Next.js applications.",
    image: "https://i0.wp.com/blog.nashtechglobal.com/wp-content/uploads/2024/04/nextjs.jpg?fit=1024%2C512&ssl=1",
    category: "Web Development",
    lessons: [
      { id: "14-1", title: "Getting Started with Next.js", completed: false },
      { id: "14-2", title: "Routing and Navigation", completed: false },
      { id: "14-3", title: "Server-Side Rendering and Static Generation", completed: false },
      { id: "14-4", title: "Integrating APIs with Next.js", completed: false },
      { id: "14-5", title: "Deploying Next.js Applications", completed: false }
    ],
    videoUrl: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI"
  },
  {
    id: "15",
    title: "Machine Learning Basics with Scikit-Learn",
    description: "Learn the basics of machine learning using Scikit-Learn. This course covers supervised and unsupervised learning, model evaluation, and building predictive models.",
    image: "https://repository-images.githubusercontent.com/343965132/549b1a80-c897-11eb-9436-918072d2e0f8",
    category: "Data Science",
    lessons: [
      { id: "15-1", title: "Introduction to Machine Learning", completed: false },
      { id: "15-2", title: "Data Preprocessing and Feature Engineering", completed: false },
      { id: "15-3", title: "Supervised Learning Algorithms", completed: false },
      { id: "15-4", title: "Unsupervised Learning Algorithms", completed: false },
      { id: "15-5", title: "Model Evaluation and Tuning", completed: false }
    ],
    videoUrl: "https://www.youtube.com/playlist?list=PLVHgQku8Z9348d6xguTn8zbcUYntz3dQG"
  },
  {
    id: "16",
    title: "SEO Strategies for Beginners",
    description: "Learn the fundamentals of Search Engine Optimization (SEO) to improve website visibility and drive organic traffic. This course covers keyword research, on-page SEO, and link building.",
    image: "data:image/png;base64,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",
    category: "Marketing",
    lessons: [
      { id: "16-1", title: "Introduction to SEO", completed: false },
      { id: "16-2", title: "Keyword Research and Analysis", completed: false },
      { id: "16-3", title: "On-Page SEO Techniques", completed: false },
      { id: "16-4", title: "Off-Page SEO and Link Building", completed: false },
      { id: "16-5", title: "Measuring SEO Success with Analytics", completed: false }
    ],
    videoUrl: "https://www.youtube.com/watch?v=xsVTqzratPs"
  },
  {
    id: "17",
    title: "Social Media Marketing with Facebook and Instagram",
    description: "Learn how to create effective social media marketing campaigns on Facebook and Instagram. This course covers content creation, ad campaigns, and audience engagement.",
    image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/273830438/original/49dab668392a43ea12005b28e1ae925c19ab7749/social-media-marketing-like-facebook-instagram-etc.jpg",
    category: "Marketing",
    lessons: [
      { id: "17-1", title: "Introduction to Social Media Marketing", completed: false },
      { id: "17-2", title: "Creating Engaging Content", completed: false },
      { id: "17-3", title: "Running Facebook and Instagram Ad Campaigns", completed: false },
      { id: "17-4", title: "Analyzing Campaign Performance", completed: false },
      { id: "17-5", title: "Building and Engaging Your Audience", completed: false }
    ],
    videoUrl: "https://www.youtube.com/playlist?list=PLu-NWLMjfmr5bmglLUwvNsIjgpGBwm5GG"
  },
  {
    id: "18",
    title: "Full-Stack Web Development with MERN",
    description: "Learn full-stack web development using the MERN stack (MongoDB, Express.js, React, Node.js). This course covers building and deploying full-stack applications.",
    image: "https://schportalmedia.s3.amazonaws.com/courseimg/MERN-COURSE.png",
    category: "Web Development",
    lessons: [
      { id: "18-1", title: "Introduction to the MERN Stack", completed: false },
      { id: "18-2", title: "Building RESTful APIs with Node.js and Express", completed: false },
      { id: "18-3", title: "Frontend Development with React", completed: false },
      { id: "18-4", title: "Integrating MongoDB with Backend", completed: false },
      { id: "18-5", title: "Deploying Full-Stack Applications", completed: false }
    ],
    videoUrl: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD"
  },
];
