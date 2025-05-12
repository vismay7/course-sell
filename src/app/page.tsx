"use client";

import { useState } from "react";
import type { Course } from "@/types/course";
import { getFeaturedCourses } from "@/lib/mock-data";
import { HeroSection } from "@/components/layout/HeroSection";
import { FeaturedCourses } from "@/components/course/FeaturedCourses";
import { CourseDetailModal } from "@/components/course/CourseDetailModal";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  BookOpen,
  Users,
  BarChart,
  ArrowRight,
  Award,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const whyChooseUsItems = [
  {
    icon: BookOpen,
    title: "Expert-Led Courses",
    description: "Learn cutting-edge skills from industry pros.",
  },
  {
    icon: Users,
    title: "Vibrant Community",
    description: "Connect, collaborate, and grow with peers.",
  },
  {
    icon: BarChart,
    title: "Flexible Learning",
    description: "Study anytime, anywhere, at your own pace.",
  },
  {
    icon: Award,
    title: "Verified Certificates",
    description: "Earn recognized certificates upon completion.",
  },
];

export default function HomePage() {
  useScrollAnimation();
  const featuredCourses = getFeaturedCourses();
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
    <div className="space-y-16 md:space-y-24 lg:space-y-32">
      <HeroSection />
      <section className="scroll-animate">
        <FeaturedCourses
          courses={featuredCourses}
          onCourseSelect={handleCourseSelect}
        />
      </section>
      <Separator className="my-12 md:my-16" />
      <section className="text-center scroll-animate">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Why Choose CourseFlow?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12 text-base md:text-lg">
          We provide a high-quality, flexible, and engaging learning experience
          designed for your success.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {whyChooseUsItems.map((item, index) => (
            <Card
              key={index}
              className="text-left hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="items-start pb-3">
                <div className="p-3 rounded-md bg-primary/10 mb-3 inline-block">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Separator className="my-12 md:my-16" />
      <section className="grid md:grid-cols-2 gap-10 md:gap-16 items-center scroll-animate">
        <div className="relative aspect-square flex justify-center items-center order-first md:order-last">
          <Image
            src="https://picsum.photos/seed/howitworks/500/500"
            alt="Illustration showing simple steps to start learning"
            width={500}
            height={500}
            className="object-contain rounded-lg w-full h-auto max-w-md"
            data-ai-hint="learning process steps diagram"
          />
        </div>
        <div className="space-y-6 text-left order-last md:order-first">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Start Learning in 3 Easy Steps
          </h2>
          <ul className="space-y-4 text-base sm:text-lg text-muted-foreground">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
              <span>
                <strong className="font-medium text-foreground">
                  Discover:
                </strong>
                Browse our extensive catalog or get personalized
                recommendations.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
              <span>
                <strong className="font-medium text-foreground">Enroll:</strong>
                Choose your course, click enroll, and begin instantly.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
              <span>
                <strong className="font-medium text-foreground">
                  Achieve:
                </strong>
                Complete lessons, practice skills, and earn your certificate.
              </span>
            </li>
          </ul>
          <Button
            size="lg"
            variant="default"
            asChild
            className="w-full md:w-auto shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href="/courses">
              Find Your Course <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
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
