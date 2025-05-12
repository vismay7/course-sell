import { GraduationCap } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8 text-center mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 group justify-center sm:justify-start">
          <GraduationCap className="h-6 w-6 text-primary" />

          <span className="text-lg font-bold text-foreground">
            Course<span className="text-primary">Flow</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} CourseFlow. All rights reserved.
        </p>
        <div className="flex space-x-6 justify-center sm:justify-end">
          <Link
            href="/courses"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            Courses
          </Link>

          <Link
            href="/about"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
