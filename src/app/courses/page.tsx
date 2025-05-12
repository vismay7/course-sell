"use client";

import { useState } from "react";
import type { Course } from "@/types/course";
import { getAllCourses } from "@/lib/mock-data";
import { CourseCatalog } from "@/components/course/CourseCatalog";
import { CourseDetailModal } from "@/components/course/CourseDetailModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BookOpen } from "lucide-react";

export default function CoursesPage() {
  useScrollAnimation();
  const allCourses = getAllCourses();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="text-center border-b pb-10 pt-6 scroll-animate">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
          <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
          Explore Our Courses
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
          Find the perfect course to enhance your skills. Filter by category,
          search by keyword, and sort by preference to discover your next
          learning adventure.
        </p>
      </section>

      <section>
        <CourseCatalog
          courses={allCourses}
          onCourseSelect={handleCourseSelect}
        />
      </section>

      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
