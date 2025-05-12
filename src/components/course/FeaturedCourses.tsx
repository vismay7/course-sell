"use client";

import type { Course } from "@/types/course";
import { CourseCard } from "./CourseCard";
import { Sparkles } from "lucide-react";

interface FeaturedCoursesProps {
  courses: Course[];
  onCourseSelect: (course: Course) => void;
}

export function FeaturedCourses({
  courses,
  onCourseSelect,
}: FeaturedCoursesProps) {
  if (!courses || courses.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="flex flex-col items-center text-center mb-10 md:mb-12">
        <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-3">
          <Sparkles className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Featured Courses
        </h2>
        <p className="mt-2 text-base md:text-lg text-muted-foreground max-w-xl">
          Handpicked courses to kickstart your learning journey in popular
          fields.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onViewDetails={onCourseSelect}
          />
        ))}
      </div>
    </section>
  );
}
