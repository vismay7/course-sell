"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  Users,
  Target,
  Lightbulb,
  Zap,
  Building,
  HeartHandshake,
  BrainCircuit,
  Group,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const teamMembers = [
  { name: "Ananya Sharma", role: "Founder & CEO", avatarSeed: "ananya" },
  { name: "Rohan Verma", role: "Lead Instructor", avatarSeed: "rohan" },
  { name: "Priya Singh", role: "Head of Design", avatarSeed: "priya" },
  { name: "Vikram Patel", role: "Marketing Guru", avatarSeed: "vikram" },
];

const coreValues = [
  {
    title: "Empowerment through Learning",
    description: "Education transforms lives and opens doors.",
    icon: BrainCircuit,
  },
  {
    title: "Quality & Excellence",
    description: "Delivering the best learning materials and experience.",
    icon: Zap,
  },
  {
    title: "Supportive Community",
    description: "Fostering a collaborative and encouraging network.",
    icon: Group,
  },
  {
    title: "Continuous Innovation",
    description: "Constantly evolving our platform and content.",
    icon: Lightbulb,
  },
];

export default function AboutUsPage() {
  useScrollAnimation();
  return (
    <div className="space-y-16 sm:space-y-20 py-6 sm:py-10">
      <section className="text-center border-b pb-10 pt-6 scroll-animate">
        <div className="inline-flex items-center justify-center p-3 bg-secondary/10 rounded-full mb-4">
          <Building className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
          About <span className="text-primary">CourseFlow</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
          Dedicated to making high-quality online education accessible and
          engaging for everyone.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10 sm:gap-12 items-center scroll-animate">
        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="https://picsum.photos/seed/missionvision/600/450"
            alt="Diverse team collaborating in a modern office"
            width={600}
            height={450}
            className="object-cover w-full h-auto"
            data-ai-hint="collaboration teamwork office diverse"
          />
        </div>
        <div className="space-y-6 text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            To democratize education by providing accessible, engaging, and
            effective online learning experiences. We aim to ignite a lifelong
            passion for learning in individuals worldwide.
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mt-4">
            Our Story
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Founded in 2023 by a group of passionate educators and tech
            innovators, CourseFlow started with a simple idea: learning should
            be flexible, impactful, and enjoyable. Today, we proudly serve a
            global community of learners.
          </p>
        </div>
      </section>

      <Separator className="my-12 md:my-16" />

      <section className="text-center scroll-animate">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
          Our Core Values
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12 text-base md:text-lg">
          These principles guide everything we do at CourseFlow.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {coreValues.map((value, index) => (
            <Card
              key={index}
              className="text-left hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="items-start pb-3">
                <div className="p-3 rounded-md bg-primary/10 mb-3 inline-block">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12 md:my-16" />

      <section className="text-center scroll-animate">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
          Meet the Team
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-10 sm:mb-12 max-w-2xl mx-auto">
          Our dedicated team of educators, designers, and developers is
          committed to crafting the ultimate learning experience for you.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center space-y-2"
            >
              <Avatar className="w-24 h-24 mb-2 border-2 border-primary/20">
                <AvatarImage
                  src={`https://picsum.photos/seed/${member.avatarSeed}/200`}
                  alt={member.name}
                  data-ai-hint="professional portrait simple"
                />
                <AvatarFallback className="text-xl">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-primary font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-12 md:my-16" />

      <section className="text-center py-12 sm:py-16 bg-gradient-to-r from-primary/80 to-accent/80 rounded-lg scroll-animate">
        <div className="container px-4 md:px-6">
          <HeartHandshake className="mx-auto h-10 w-10 text-primary-foreground mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4 sm:mb-5">
            Ready to Start Your Journey?
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 max-w-xl mx-auto">
            Join the CourseFlow community today. Unlock your potential and
            discover the skills you need for a brighter future. Your next
            adventure awaits.
          </p>
          <Button
            size="lg"
            asChild
            variant="secondary"
            className="shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href="/courses">Explore All Courses</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
