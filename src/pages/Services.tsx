import { HelpCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlobalQuiz from "@/components/quiz/GlobalQuiz";
import ProcessStepsSection from "@/components/sections/ProcessStepsSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import ServicesTestimonialsCarousel from "@/components/sections/ServicesTestimonialsCarousel";
import { QuizProvider, useQuiz } from "@/contexts/QuizContext";
import { truckStormySky, heatherPortrait } from "@/assets";

const ServicesContent = () => {
  const { openQuiz } = useQuiz();

  const painPoints = [
    "Staring at spreadsheets wondering what counts as a deduction",
    "Googling what an S corp is — and if your business should be one",
    "Unsure how to file taxes now that you're an LLC",
    "Worried about quarterly taxes (or thinking: wait — quarterly taxes?!)",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Full-Width Hero Image with Text Overlay */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <img
          src={truckStormySky}
          alt="Digital nomad lifestyle"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white uppercase leading-tight">
              Tax Prep, Tax Review and Tax Planning
              <br />
              <span className="text-primary-foreground">For Digital Nomads</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Two-Column Content Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                9 out of 10 small business owners say that working with a tax professional saves time and reduces stress.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your nomadic lifestyle is all about freedom — but you don't always feel free. Running a business from the road is hard. The dream of full-time travel gets drowned out by stress, confusion, and overwhelm.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You want to get out and explore, but instead you're:
              </p>
              <ul className="space-y-3">
                {painPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Heather Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={heatherPortrait}
                  alt="Heather - Tax Queen"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - ProcessStepsSection */}
      <ProcessStepsSection />

      {/* Quiz Embedded Section */}
      <section id="quiz" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase mb-4">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-muted-foreground">
                Take our quick quiz to find the perfect fit for your unique tax situation.
              </p>
            </div>
            
            {/* Embedded Quiz */}
            <div className="bg-background rounded-2xl shadow-lg border border-border overflow-hidden">
              <GlobalQuiz isEmbedded={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <ServicesTestimonialsCarousel />

      {/* Who's A Good Fit - ComparisonSection */}
      <ComparisonSection />

      {/* Small CTA Section */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground uppercase mb-6">
            Ready to Take Control of Your Taxes?
          </h2>
          <Button
            variant="glass"
            size="lg"
            className="rounded-full bg-white/20 text-white border-white/30 hover:bg-white/30"
            onClick={() => openQuiz()}
          >
            Get Started
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Services = () => {
  return (
    <QuizProvider>
      <ServicesContent />
    </QuizProvider>
  );
};

export default Services;
