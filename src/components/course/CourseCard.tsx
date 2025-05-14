"use client";

import type { Course } from "@/types/course";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Star,
  Users,
  Clock,
  PlayCircle,
  Zap,
  InfoIcon,
  ShoppingCartIcon,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CourseCardProps {
  course: Course;
  onViewDetails: (course: Course) => void;
}

export function CourseCard({ course, onViewDetails }: CourseCardProps) {
  const route = useRouter();

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group bg-card">
      <CardHeader
        className="p-0 relative cursor-pointer"
        onClick={() => onViewDetails(course)}
      >
        <Image
          src={course.imageUrl}
          alt={course.title}
          width={600}
          height={338}
          className="w-full h-auto aspect-video object-cover"
          data-ai-hint={`${course.category} course abstract`}
        />

        {course.featured && (
          <Badge
            variant="destructive"
            className="absolute top-3 right-3 text-xs"
          >
            <Zap className="w-3 h-3 mr-1" /> Featured
          </Badge>
        )}
      </CardHeader>
      <CardContent
        className="p-4 flex-grow flex flex-col cursor-pointer "
        onClick={() => onViewDetails(course)}
      >
        <Badge
          variant="secondary"
          className="mb-2 self-start text-xs font-medium"
        >
          {course.category}
        </Badge>
        <CardTitle className="text-lg font-semibold mb-2 leading-tight flex-grow text-foreground group-hover:text-primary transition-colors">
          {course.title}
        </CardTitle>

        <p className="text-sm text-muted-foreground mb-3">
          By {course.instructor}
        </p>
        <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-4 gap-x-4 gap-y-1">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span>{course.rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />

            <span>{course.studentsEnrolled.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />

            <span>{course.duration}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {course.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 border-t mt-auto bg-muted/50">
        <div className="flex justify-between items-center w-full gap-4">
          <div className="w-full flex items-center justify-center text-sm font-medium text-muted-foreground">
            <DollarSign className="h-4 w-4" /> {course.price}
          </div>
          <Button
            size="sm"
            onClick={() => route.push(`/checkout/${course.id}`)}
            variant="default"
            className="w-full"
            aria-label={`View details for ${course.title}`}
          >
            <ShoppingCartIcon className="mr-1.5 h-4 w-4" /> Checkout
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
