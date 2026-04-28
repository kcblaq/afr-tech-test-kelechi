import { RiHeartLine } from "@remixicon/react";

export default function AboutPage() {
  return (
    <section className="w-full py-24 md:py-32 bg-muted/50 border-b min-h-[80vh] flex items-center">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-background text-foreground">
              <RiHeartLine className="mr-1 size-3" /> About Us
            </div>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Designed for elegance and performance.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We believe that great design should be accessible to everyone. Our platform provides the tools you need to build stunning interfaces without compromising on performance or user experience.
            </p>
            <ul className="space-y-3 pt-4">
              {[
                "Fully responsive components",
                "Accessible by default",
                "Customizable design system",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="size-2 rounded-full bg-primary" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-square md:aspect-[4/3] rounded-3xl bg-primary/5 border shadow-inner flex items-center justify-center p-8">
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-background border flex items-center justify-center">
              <span className="text-muted-foreground font-medium">Illustration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
