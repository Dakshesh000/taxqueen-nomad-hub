import { Card, CardContent } from "@/components/ui/card";

// Placeholder testimonials - to be replaced with actual content
const testimonials = [
  {
    quote: "[Client testimonial quote goes here]",
    name: "[Client Name]",
    role: "[Client Role/Location]",
  },
  {
    quote: "[Client testimonial quote goes here]",
    name: "[Client Name]",
    role: "[Client Role/Location]",
  },
  {
    quote: "[Client testimonial quote goes here]",
    name: "[Client Name]",
    role: "[Client Role/Location]",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            [Testimonials Headline]
          </h2>
          <p className="text-muted-foreground">
            [What clients say about Tax Queen]
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-muted/30">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-foreground italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-muted-foreground text-xs">[Photo]</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
