import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine } from "@remixicon/react";

export default function HomePage() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-48 flex items-center justify-center min-h-[80vh]">
      <div className="container px-4 md:px-6 text-center space-y-8 max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome to the <span className="text-primary">Future</span> of UI
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl leading-relaxed">
          Experience seamless design with our modern stacked layout. Built with Next.js, Tailwind CSS, and beautifully crafted components.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" variant="secondary" className="h-12 px-8 text-white" asChild>
            <Link href="/register">
              Start Building <RiArrowRightLine className="ml-2 size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
