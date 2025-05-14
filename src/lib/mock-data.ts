import type { Course } from "@/types/course";
import web from "@/public/images/web.jpg";
import msm from "@/public/images/msm.webp";
import cse from "@/public/images/cse.jpg";
import dmm from "@/public/images/dmm.jpg";
import pds from "@/public/images/pds.jpg";
import uiux from "@/public/images/uiux.jpg";

export const mockCourses: Course[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of HTML, CSS, and JavaScript.",
    longDescription:
      "This comprehensive course covers everything you need to start building websites. From basic HTML structure to responsive CSS layouts and dynamic JavaScript interactions, you will gain hands-on experience through various projects. Suitable for absolute beginners with no prior coding knowledge.",
    instructor: "Dr. Angela Yu",
    duration: "12h 30m",
    rating: 4.7,
    imageUrl: web,
    category: "Development",
    level: "Beginner",
    studentsEnrolled: 12050,
    tags: ["HTML", "CSS", "JavaScript", "Frontend"],
    price: 49.99,
    featured: true,
    lastUpdated: "2024-05-01",
  },
  {
    id: "2",
    title: "Advanced React and State Management",
    description: "Dive deep into React, Hooks, Redux, and Context API.",
    longDescription:
      "Take your React skills to the next level. This course explores advanced concepts like custom Hooks, performance optimization, server-side rendering, and state management with Redux and Context API. Includes real-world project examples and best practices.",
    instructor: "Maximilian Schwarzmüller",
    duration: "20h 15m",
    rating: 4.9,
    imageUrl: msm,
    category: "Development",
    level: "Advanced",
    studentsEnrolled: 8500,
    tags: ["React", "Redux", "Hooks", "State Management"],
    price: 99.99,
    featured: true,
    lastUpdated: "2024-04-15",
  },
  {
    id: "3",
    title: "UI/UX Design Fundamentals",
    description:
      "Master the principles of user interface and user experience design.",
    longDescription:
      "Learn how to create intuitive and visually appealing digital products. This course covers user research, wireframing, prototyping, usability testing, and visual design principles. You will work with popular design tools and build a portfolio-ready project.",
    instructor: "Jane Portman",
    duration: "15h 00m",
    rating: 4.6,
    imageUrl: uiux,
    price: 59.99,
    category: "Design",
    level: "Beginner",
    studentsEnrolled: 9800,
    tags: ["UI", "UX", "Figma", "Prototyping"],
    featured: true,
    lastUpdated: "2024-05-10",
  },
  {
    id: "4",
    title: "Data Science with Python",
    description:
      "Explore data analysis, visualization, and machine learning using Python.",
    longDescription:
      "Unlock the power of data with Python. This course introduces key libraries like NumPy, Pandas, Matplotlib, and Scikit-learn. You will learn to clean, analyze, and visualize data, as well as build and evaluate machine learning models for various tasks.",
    instructor: "Jose Portilla",
    duration: "25h 45m",
    rating: 4.8,
    imageUrl: pds,
    category: "Data Science",
    level: "Intermediate",
    studentsEnrolled: 15200,
    tags: ["Python", "Pandas", "NumPy", "Machine Learning"],
    price: 79.99,
    lastUpdated: "2024-03-20",
  },
  {
    id: "5",
    title: "Digital Marketing Masterclass",
    description:
      "Learn SEO, content marketing, social media, and PPC advertising.",
    longDescription:
      "Become a digital marketing expert. This masterclass covers all essential aspects, including search engine optimization (SEO), content creation, social media strategy, email marketing, and pay-per-click (PPC) advertising. Real case studies and practical exercises included.",
    instructor: "Neil Patel",
    duration: "18h 00m",
    price: 89.99,
    rating: 4.5,
    imageUrl: dmm,
    category: "Marketing",
    level: "Intermediate",
    studentsEnrolled: 7600,
    tags: ["SEO", "Social Media", "Content Marketing", "PPC"],
    lastUpdated: "2024-04-25",
  },
  {
    id: "6",
    title: "Cybersecurity Essentials",
    description:
      "Understand common threats and learn to protect systems and data.",
    longDescription:
      "In an increasingly digital world, cybersecurity is paramount. This course provides a foundational understanding of cybersecurity principles, common threats (like malware, phishing, DDoS attacks), network security, cryptography, and ethical hacking basics. Learn how to implement security best practices to protect personal and organizational data.",
    instructor: "Kevin Mitnick",
    duration: "16h 30m",
    rating: 4.7,
    imageUrl: cse,
    category: "IT & Software",
    level: "Beginner",
    studentsEnrolled: 6500,
    tags: ["Security", "Networking", "Data Protection", "Ethical Hacking"],
    price: 69.99,
    featured: false,
    lastUpdated: "2024-05-05",
  },
];

export const getFeaturedCourses = (): Course[] =>
  mockCourses.filter((course) => course.featured);
export const getAllCourses = (): Course[] => mockCourses;
