import { RiSendPlaneLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <section className="w-full py-24 md:py-32 min-h-[80vh] flex items-center justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-3xl text-center space-y-8">
        <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
          <RiSendPlaneLine className="size-8 text-primary" />
        </div>
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Get in Touch
        </h2>
        <p className="text-muted-foreground text-lg">
          Have questions or need support? Our team is always here to help you navigate your journey.
        </p>
        <div className="pt-4">
          <Button size="lg" className="rounded-full px-8 h-14 text-lg">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}
