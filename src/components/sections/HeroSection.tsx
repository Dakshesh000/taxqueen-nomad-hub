import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30 pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Placeholder content - to be replaced with actual content */}
          <p className="text-sm font-medium text-primary uppercase tracking-wider">
            Digital Nomad Tax Expert
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            [Hero Headline Goes Here]
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            [Subheadline describing the value proposition for digital nomads with US tax obligations]
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg">Book a Free Consultation</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
