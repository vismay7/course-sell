"use client";

import type { Course } from "@/types/course";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Star,
  Users,
  Clock,
  Tag,
  CalendarDays,
  DollarSign,
  ExternalLink,
  CheckCircle,
  Rocket,
  BookCheck,
} from "lucide-react";

interface CourseDetailModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CourseDetailModal({
  course,
  isOpen,
  onClose,
}: CourseDetailModalProps) {
  if (!course) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl md:max-w-3xl lg:max-w-4xl p-0 max-h-[90vh] flex flex-col overflow-hidden">
        <DialogHeader className="p-5 sm:p-6 pb-4 border-b">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-foreground">
                {course.title}
              </DialogTitle>

              <DialogDescription className="text-sm sm:text-base text-muted-foreground mt-1">
                By {course.instructor} • {course.category}
              </DialogDescription>
            </div>
            <Badge variant="outline" className="shrink-0 mt-1 capitalize">
              {course.level}
            </Badge>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-grow">
          <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="md:col-span-2 space-y-5">
              {course.trailerUrl ? (
                <div className="aspect-video mb-4 rounded-lg overflow-hidden shadow-md border">
                  <iframe
                    width="100%"
                    height="100%"
                    src={course.trailerUrl.replace("watch?v=", "embed/")}
                    title={`${course.title} Trailer`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0 block"
                  ></iframe>
                </div>
              ) : (
                <div className="mb-4 rounded-lg overflow-hidden shadow-md border">
                  <Image
                    src={course.imageUrl}
                    alt={course.title}
                    width={600}
                    height={338}
                    className="w-full h-auto object-cover"
                    data-ai-hint={`${course.category} learning abstract`}
                  />
                </div>
              )}
              <h3 className="text-lg font-semibold text-foreground pt-2">
                Description
              </h3>

              <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                {course.longDescription || course.description}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  Key Info
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 shrink-0" />
                    <span>
                      <strong className="font-medium text-foreground">
                        {course.rating.toFixed(1)}
                      </strong>
                      avg rating
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <Users className="w-4 h-4 text-foreground/80 shrink-0" />
                    <span>
                      <strong className="font-medium text-foreground">
                        {course.studentsEnrolled.toLocaleString()}
                      </strong>
                      students
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <Clock className="w-4 h-4 text-foreground/80 shrink-0" />
                    <span>
                      <strong className="font-medium text-foreground">
                        {course.duration}
                      </strong>
                      total content
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <CalendarDays className="w-4 h-4 text-foreground/80 shrink-0" />
                    <span>
                      Updated:
                      <strong className="font-medium text-foreground">
                        {new Date(course.lastUpdated).toLocaleDateString()}
                      </strong>
                    </span>
                  </div>

                  <div className="pt-3">
                    {course.price != null ? (
                      <div className="flex items-center gap-2 text-foreground font-bold text-xl">
                        <DollarSign className="w-5 h-5 text-primary shrink-0" />
                        <span>${course.price.toFixed(2)}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-primary font-bold text-xl">
                        <Rocket className="w-5 h-5 shrink-0" />
                        <span>Free</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  What You'll Learn
                </h3>

                <ul className="space-y-2.5 text-sm list-none">
                  <li className="flex items-start gap-2.5 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90">
                      Core concepts of {course.category}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90">
                      Practical
                      {course.tags.length > 0 ? course.tags[0] : "techniques"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90">
                      Build real-world projects
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  Tags
                </h3>

                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="p-4 sm:p-5 border-t flex flex-col sm:flex-row justify-end gap-3 bg-muted/50">
          <Button variant="outline" onClick={onClose} size="sm">
            Close
          </Button>
          <Button
            variant="default"
            size="sm"
            className="shadow-sm hover:shadow-md transition-shadow"
          >
            <BookCheck className="mr-1.5 h-4 w-4" /> Enroll Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
