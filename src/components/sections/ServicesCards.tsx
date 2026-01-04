import React from "react";
import { FileText, Sparkles, Compass, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/contexts/QuizContext";

// Service images
import taxPrep1 from "@/assets/services/tax-preparation-1.jpg";
import taxStrategy1 from "@/assets/services/tax-strategy-1.jpg";
import miniSession1 from "@/assets/services/mini-session-1.jpg";

interface ServiceCardProps {
  image: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  features: string[];
  onGetStarted: () => void;
}

const ServiceCard = ({ image, icon: Icon, title, subtitle, features, onGetStarted }: ServiceCardProps) => (
  <div className="group bg-background rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-border">
    {/* Header Image with Icon Badge */}
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col">
      <h3 className="text-xl md:text-2xl font-bold text-foreground uppercase mb-2">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm md:text-base mb-4">
        {subtitle}
      </p>

      {/* Features List */}
      <ul className="space-y-2 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-foreground text-sm md:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button variant="cta" className="w-full rounded-full" onClick={onGetStarted}>
        Get Started
      </Button>
    </div>
  </div>
);

const ServicesCards = () => {
  const { openQuiz } = useQuiz();

  const services = [
    {
      image: taxPrep1,
      icon: FileText,
      title: "Tax Preparation",
      subtitle: "For US taxpayers who want filing done correctly and stress-free.",
      features: [
        "Federal + state filing",
        "Self-employment & business income",
        "Foreign Tax Credits (Form 1116)",
        "FBAR & FATCA reporting",
      ],
    },
    {
      image: taxStrategy1,
      icon: Sparkles,
      title: "Tax Strategy & Planning",
      subtitle: "For business owners + freelancers who want a plan (not surprises).",
      features: [
        "Quarterly tax planning",
        "Deduction & credits optimization",
        "LLC vs S-Corp clarity",
        "Year-round support",
      ],
    },
    {
      image: miniSession1,
      icon: Compass,
      title: "Mini Tax Session",
      subtitle: "For people who need clarity before choosing a service.",
      features: [
        "Domicile & residency questions",
        "Deductions reality-check",
        "Next steps for your situation",
        "Custom action plan",
      ],
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground uppercase mb-4">
            Services I Offer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here's how I can work with you
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
              onGetStarted={() => openQuiz()}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
