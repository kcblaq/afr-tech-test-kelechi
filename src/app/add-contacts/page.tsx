import { RegisterForm } from "@/components/RegisterForm";

export default function RegisterPage() {
  return (
    <section className="w-full  py-24 md:py-32 min-h-[80vh] flex items-center justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-2xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Create an Account
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of developers building the future of the web.
          </p>
        </div>
        <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-6 md:p-8">
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
