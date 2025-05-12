import { GraduationCap, Info, BookOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b bg-card sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <GraduationCap className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
          <span className="text-xl sm:text-2xl font-bold text-foreground">
            Course<span className="text-primary">Flow</span>
          </span>
        </Link>

        <nav>
          <ul className="flex items-center space-x-2 sm:space-x-4">
            <li>
              <Button variant="ghost" size="sm" asChild>
                <Link
                  href="/courses"
                  className="flex items-center gap-1.5 text-sm sm:text-base font-medium"
                >
                  <BookOpen size={18} /> Courses
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" size="sm" asChild>
                <Link
                  href="/about"
                  className="flex items-center gap-1.5 text-sm sm:text-base font-medium"
                >
                  <Info size={18} /> About
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
