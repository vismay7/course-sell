"use client";

import type { Course } from "@/types/course";
import { CourseCard } from "./CourseCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useMemo } from "react";
import { ListChecks, Search, Filter, ArrowUpDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CourseCatalogProps {
  courses: Course[];
  onCourseSelect: (course: Course) => void;
}

export function CourseCatalog({ courses, onCourseSelect }: CourseCatalogProps) {
  useScrollAnimation();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("rating");
  const [filterCategory, setFilterCategory] = useState("all");

  const categories = useMemo(
    () => ["all", ...new Set(courses.map((c) => c.category))],
    [courses]
  );

  const filteredAndSortedCourses = useMemo(() => {
    let filtered = courses;

    if (filterCategory !== "all") {
      filtered = filtered.filter(
        (course) => course.category === filterCategory
      );
    }

    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(lowerSearchTerm) ||
          course.instructor.toLowerCase().includes(lowerSearchTerm) ||
          course.tags.some((tag) => tag.toLowerCase().includes(lowerSearchTerm))
      );
    }

    switch (sortOption) {
      case "title":
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case "students":
        return filtered.sort((a, b) => b.studentsEnrolled - a.studentsEnrolled);
      case "rating":
      default:
        return filtered.sort((a, b) => b.rating - a.rating);
    }
  }, [courses, searchTerm, sortOption, filterCategory]);

  return (
    <section className="space-y-8 md:space-y-10">
      <Card className="p-4 sm:p-6 bg-card shadow-sm scroll-animate">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:flex-grow md:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <Input
              type="text"
              placeholder="Search courses, instructors, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <Filter className="h-4 w-4 mr-2 opacity-70" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <ArrowUpDown className="h-4 w-4 mr-2 opacity-70" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="title">Title</SelectItem>
                <SelectItem value="students">Popularity</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {filteredAndSortedCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 scroll-animate">
          {filteredAndSortedCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onViewDetails={onCourseSelect}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-border rounded-lg bg-card scroll-animate">
          <ListChecks className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-xl text-foreground font-semibold">
            No courses found
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </section>
  );
}
