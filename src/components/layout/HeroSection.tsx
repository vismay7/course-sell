"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

import Link from "next/link";

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-background to-secondary/30 rounded-lg">
      <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6 text-left">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4 mr-2" />
            Start Your Learning Journey
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Unlock Your Potential with
            <span className="text-primary">CourseFlow</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl">
            Explore high-quality online courses taught by industry experts. Find
            the perfect course to boost your skills and career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              asChild
              variant="default"
              className="w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow"
            >
              <Link href="/courses">
                Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="relative aspect-video lg:aspect-square flex justify-center items-center order-first lg:order-last">
          <Image
            src="https://picsum.photos/seed/learnhero/600/600"
            alt="Diverse group of students learning online"
            width={600}
            height={600}
            className="object-cover rounded-xl shadow-lg w-full h-auto max-w-md lg:max-w-full"
            priority
            data-ai-hint="learning online diverse students"
          />
        </div>
      </div>
    </section>
  );
}
