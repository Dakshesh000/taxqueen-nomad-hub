import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Excellent service. Quick turnaround. Heather has surpassed any previous tax preparer I've had. She is knowledgeable and very personable.",
    name: "Jon K.",
    role: "Digital Nomad",
  },
  {
    text: "You're the BEST! You are so prompt and super helpful (and patient!). I really appreciate how thorough you are.",
    name: "Sevilla",
    role: "Business Owner",
  },
  {
    text: "Taxes have been an enormous stressor since I moved to Portugal. Having a pro like Heather on my side made this year so much easier!",
    name: "Catherine",
    role: "Expat Entrepreneur",
  },
  {
    text: "I trust you and you know my taxes intimately. You've saved me thousands over the years with your expertise.",
    name: "Bina J.",
    role: "Full-Time RVer",
  },
  {
    text: "Heather has been our tax accountant for 11 years. She's thorough, responsive, and genuinely cares about her clients.",
    name: "Mike M.",
    role: "Small Business Owner",
  },
  {
    text: "She is as sharp as they come. The perfect fit for our needs as digital nomads with multiple income streams.",
    name: "James W.",
    role: "Remote Worker",
  },
];

const ServicesTestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Auto-scroll every 8 seconds
  useEffect(() => {
    if (!emblaApi) return;

    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 8000);

    return () => clearInterval(intervalId);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground uppercase mt-2">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full bg-background shadow-lg hidden md:flex"
            disabled={!canScrollPrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full bg-background shadow-lg hidden md:flex"
            disabled={!canScrollNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="bg-secondary rounded-2xl p-6 h-full border border-border shadow-sm">
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                    <p className="text-foreground leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>
                    <div className="mt-auto">
                      <p className="font-bold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-8 md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTestimonialsCarousel;
